import Banner from './Banner';

// .ph — the highlighted placeholder marks in the legal text.
function Mark({ children }) {
  return (
    <mark className="bg-butter px-[.4em] py-[.05em] rounded-md not-italic">{children}</mark>
  );
}

export default function Impressum() {
  return (
    <div>
      <Banner size="sm" title="Legal Notice" />

      <section className="py-[clamp(2.5rem,7vw,5.5rem)] px-[clamp(.25rem,3vw,2.5rem)]">
        <div className="bg-white rounded-[28px] p-[clamp(1.25rem,4vw,3rem)] max-w-[900px] mx-auto mob:rounded-[22px]">
          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem] first:mt-0">Information pursuant to § 5 DDG</h2>
          <p className="max-w-none">
            Thai Massage Enjoy
            <br />
            <Mark>First and last name of the owner</Mark>
            <br />
            Krichplatz 6
            <br />
            83093 Bad Endorf
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Contact</h2>
          <p className="max-w-none">
            Phone: <a href="tel:+4980536859464" className="underline-offset-[3px] [overflow-wrap:anywhere]">08053 6859 464</a>
            <br />
            Mobile: <a href="tel:+4917641947586" className="underline-offset-[3px] [overflow-wrap:anywhere]">0176 4194 75 86</a>
            <br />
            Email: <Mark>Studio email address</Mark>
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">VAT</h2>
          <p className="max-w-none">
            VAT identification number pursuant to § 27a UStG: <Mark>Enter VAT ID or remove this line</Mark>
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Responsible for content (§ 18 para. 2 MStV)</h2>
          <p className="max-w-none">
            <Mark>First and last name</Mark>, Krichplatz 6, 83093 Bad Endorf
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Consumer dispute resolution</h2>
          <p className="max-w-none">
            <Mark>Choose the applicable statement:</Mark> We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Copyright</h2>
          <p className="max-w-none">The texts, graphics and images on this website are protected by copyright. Any use beyond the limits set by law requires our prior consent.</p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Image credits</h2>
          <p className="max-w-none">
            Photographs by Koolshooters, Anastasia Ilina-Makarova, Ian Panelo and Tima Miroshnichenko via{' '}
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-[3px] [overflow-wrap:anywhere]">Pexels</a>.
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Liability for content and links</h2>
          <p className="max-w-none">We create and maintain the content of this site with care, but cannot guarantee that it is complete or up to date. We have no influence over external sites we link to; their operators are solely responsible for their content.</p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Data protection notice</h2>
          <p className="max-w-none">
            Information you provide through the contact form or by phone is used only to answer your request and arrange appointments. Fonts are loaded from Google Fonts, which transmits your IP address to Google. <Mark>Add a full privacy policy and check whether other services (e.g. analytics, maps) are used.</Mark>
          </p>

          <h2 className="text-[1.4rem] mt-[2.2rem] mb-[.6rem]">Concept and design</h2>
          <p className="max-w-none">
            <Mark>Name of the agency / designer, optionally with a link</Mark>
          </p>
          <p className="mt-8 mb-0 max-w-none text-muted text-[.88rem]">© 2026 Thai Massage Enjoy. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
