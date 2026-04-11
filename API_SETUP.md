# Backend API Setup Guide

This React app requires backend endpoints for complete functionality. Here's how to set them up.

## 1. Stripe Checkout Session

### Endpoint: POST `/api/create-checkout-session`

This endpoint creates a Stripe checkout session and returns the session ID.

**Request:**
```json
{
  "priceId": "foundation-program",
  "productName": "The Foundation",
  "amount": 19900
}
```

**Response:**
```json
{
  "id": "cs_test_a1b2c3d4e5f6g7h8i9j0"
}
```

### Example Node.js/Express Implementation

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { productName, amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/#programs`,
    });

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

### Example Python/Flask Implementation

```python
import stripe

@app.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        data = request.json
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'usd',
                    'product_data': {
                        'name': data['productName'],
                    },
                    'unit_amount': data['amount'],
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=f"{os.environ['DOMAIN']}/success?session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url=f"{os.environ['DOMAIN']}/#programs",
        )
        return {'id': session.id}
    except Exception as e:
        return {'error': str(e)}, 500
```

## 2. Booking Management

### Endpoint: POST `/api/book-coaching-session`

Stores coaching session booking requests.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "experience": "intermediate",
  "date": "2024-04-20",
  "time": "2:00 PM"
}
```

**Response:**
```json
{
  "success": true,
  "bookingId": "booking_123456",
  "message": "Booking request received. We'll contact you within 24 hours."
}
```

### Example Node.js/Express Implementation

```javascript
app.post('/api/book-coaching-session', async (req, res) => {
  try {
    const { name, email, experience, date, time } = req.body;

    // Store in database
    const booking = await BookingModel.create({
      name,
      email,
      experience,
      date,
      time,
      status: 'pending'
    });

    // Send confirmation email
    await sendEmail({
      to: email,
      subject: 'Coaching Session Booking Confirmation',
      template: 'booking-confirmation',
      data: { name, date, time }
    });

    // Notify admin
    await notifyAdmin({
      subject: 'New Coaching Session Request',
      data: { name, email, experience, date, time }
    });

    res.json({
      success: true,
      bookingId: booking.id,
      message: "Booking request received. We'll contact you within 24 hours."
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

## 3. Calendar Availability Check

### Endpoint: GET `/api/calendar-availability`

Returns available time slots for a given date.

**Request:**
```
GET /api/calendar-availability?date=2024-04-20
```

**Response:**
```json
{
  "availableTimes": [
    "9:00 AM",
    "10:30 AM",
    "2:00 PM",
    "3:30 PM",
    "5:00 PM"
  ]
}
```

### Example Node.js/Express Implementation

```javascript
app.get('/api/calendar-availability', async (req, res) => {
  try {
    const { date } = req.query;
    
    // Get all bookings for this date
    const bookings = await BookingModel.find({
      date: date,
      status: { $ne: 'cancelled' }
    });

    const bookedTimes = bookings.map(b => b.time);
    const allTimes = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];
    const availableTimes = allTimes.filter(t => !bookedTimes.includes(t));

    res.json({ availableTimes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

## 4. Environment Variables

### Backend Environment Variables

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
DOMAIN=http://localhost:3000
DATABASE_URL=mongodb://...
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=...
ADMIN_EMAIL=admin@example.com
```

### Frontend Environment Variables (in `.env.local`)

```
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_API_BASE_URL=http://localhost:3001
```

## 5. Integration Steps

1. **Set up backend server** (Node/Express, Python/Flask, etc.)
2. **Configure database** for booking storage (MongoDB, PostgreSQL, etc.)
3. **Set up email service** (SendGrid, AWS SES, etc.)
4. **Add Stripe API keys** to environment
5. **Update API endpoints** in React components if different from defaults
6. **Test locally** before deploying
7. **Deploy backend** to production
8. **Deploy frontend** to Vercel

## 6. Security Considerations

- ✅ Use HTTPS for all API calls
- ✅ Validate all input on server side
- ✅ Never expose Stripe secret key to client
- ✅ Implement CORS properly
- ✅ Use environment variables for secrets
- ✅ Implement rate limiting
- ✅ Use Stripe webhooks for payment confirmation
- ✅ Verify user email addresses
- ✅ Implement booking confirmation codes
- ✅ Log all transactions for audit

## 7. Testing

Use Stripe test mode with test card: `4242 4242 4242 4242`

Test bookings with:
- Email: `test@example.com`
- Date: `2024-04-20`
- Time: `2:00 PM`
