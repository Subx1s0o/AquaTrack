import AdvantagesCustomersPictures from './AdvantagesCustomersPictures';
import AdvantagesSpans from './AdvantagesSpans';

export default function AdvantagesSection() {
  return (
    <section className="relative block size-full rounded-[30px]">
      <picture className="block size-full">
        <source
          srcSet="/images/Welcome/welcome-mobile.avif 1x, /images/Welcome/welcome-mobile@2x.avif 2x"
          media="(max-width: 767px)"
          type="image/avif"
        />
        <source
          srcSet="/images/Welcome/welcome-tablet.avif 1x, /images/Welcome/welcome-tablet@2x.avif 2x"
          media="(min-width: 768px) and (max-width: 1439px)"
          type="image/avif"
        />
        <source
          srcSet="/images/Welcome/welcome-desktop.avif 1x, /images/Welcome/welcome-desktop@2x.avif 2x"
          media="(min-width: 1440px)"
          type="image/avif"
        />
        <img
          src="/images/Welcome/welcome-mobile.avif"
          alt="Welcome section"
          className="size-full"
        />
      </picture>
      <AdvantagesCustomersPictures />
      <AdvantagesSpans />
    </section>
  );
}
