// Data translated from the original page (prices from brochure).

// Treatments. g: group index (0 = Massages, 1 = Spa), i: image key (legacy).
export const TREATMENTS = [
  {
    n: 'Foot Reflexology & Leg Massage',
    f: 'Thai Foot Reflexology and Leg Massage',
    g: 0,
    i: 'a',
    d: 'Stimulates the foot reflex points, works on the corresponding organs and boosts blood circulation.',
    p: [[30, 30], [45, 41], [60, 53], [90, 70], [120, 94]],
  },
  {
    n: 'Traditional Thai Massage',
    g: 0,
    i: 't',
    d: 'Stimulates energy points and lines across the whole body. Tension is released through stretching techniques.',
    p: [[30, 32], [45, 46], [60, 53], [90, 70], [120, 94]],
  },
  {
    n: 'Thai Aroma Massage',
    g: 0,
    i: 'o',
    d: 'A gentle aroma oil massage that combines traditional Thai massage techniques with the calming effect of aromatic oils.',
    p: [[30, 34], [45, 46], [60, 65], [90, 82], [120, 99]],
  },
  {
    n: 'Thai Herbal Stamp Massage',
    g: 0,
    i: 'h',
    d: 'Warm linen cloths filled with herbs draw toxins from the skin.',
    p: [[60, 72], [90, 98], [120, 123]],
  },
  {
    n: 'Hot Stone Massage',
    g: 0,
    i: 'a',
    d: 'A full-body massage with hot basalt stones whose warmth brings deep muscle relaxation.',
    p: [[60, 72], [90, 99], [120, 123]],
    x: 'Also available as a 60-minute back and neck massage.',
  },
  {
    n: 'Face Spa',
    g: 1,
    i: 'f',
    d: 'Gentle cleansing for face and décolleté, a facial massage and a moisturising mask.',
    p: [[45, 45], [60, 63]],
  },
  {
    n: 'Foot Spa',
    g: 1,
    i: 'o',
    d: 'Exfoliation, foot bath and Thai foot reflexology massage, finished with a nourishing cream.',
    p: [[60, 59]],
  },
  {
    n: 'Foot Spa + Face Spa',
    g: 1,
    i: 'f',
    d: 'Both treatments combined in one appointment.',
    p: [[90, 86]],
  },
  {
    n: 'Body Spa',
    g: 1,
    i: 'a',
    d: 'Full-body skin exfoliation and an aroma oil massage.',
    p: [[90, 95]],
  },
];

// Service groups for the Services page.
export const GROUPS = [
  ['Massages', 'Classic Thai techniques, warm oils and herbs. For the back, legs and the whole body.'],
  ['Spa', 'Care for face, feet and skin. Cleanse gently, unwind and feel refreshed.'],
];

// Indulgence packages: [name, price] – all 90 minutes.
export const PACKAGES = [
  ['Face Spa + Thai Aroma Oil Massage', 98],
  ['Face Spa + Thai Herbal Stamp Massage', 108],
  ['Face Spa + Hot Stone Massage', 108],
  ['Body Spa + Thai Herbal Stamp Massage', 101],
  ['Body Spa + Hot Stone Massage', 102],
];

// About benefits.
export const BENEFITS = [
  ['Release tension', 'Stretching and pressure loosen the neck, back and shoulders.'],
  ['Boost circulation', 'Especially noticeable with foot and leg massages.'],
  ['Deep calm', 'Warm oils and herbs soothe body and mind.'],
  ['Mobileity', 'Gentle stretches for a freer feeling in the body.'],
];

// "How your visit works" steps.
export const STEPS = [
  ['1', 'Arrive', 'You settle in, and we talk through your wishes, any complaints and the right duration.'],
  ['2', 'Treatment', 'We adjust pressure and pace to you. Tell us at any time if you would like more or less.'],
  ['3', 'Afterglow', 'After the massage there is time to let it sink in before you return to everyday life.'],
];

// FAQ for the Contact page.
export const FAQ = [
  ['How long should my massage be?', '30 minutes suit targeted areas such as the feet or back. For a full-body treatment we recommend 60 to 120 minutes.'],
  ['What is the difference between Thai massage and aroma oil massage?', 'Traditional Thai massage works with pressure points and stretching techniques. Aroma massage combines these techniques with warm, fragrant oils and is especially calming.'],
  ['Can I give a voucher as a gift?', 'Yes. Ask about our gift voucher by phone or through the form.'],
  ['How do I book an appointment?', 'Send us a request through the form, or call us Monday to Saturday between 10 am and 7 pm.'],
];

// Main navigation.
export const NAV = [
  { href: '#home', label: 'Home', view: 'home' },
  { href: '#services', label: 'Services', view: 'services' },
  { href: '#contact', label: 'Contact', view: 'contact' },
];

// Document titles per view.
export const TITLES = {
  home: 'Thai Massage Enjoy – Bad Endorf',
  services: 'Treatments and prices – Thai Massage Enjoy',
  contact: 'Book an appointment – Thai Massage Enjoy',
  impressum: 'Legal Notice – Thai Massage Enjoy',
};
