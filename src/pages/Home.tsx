const assetPathPrefix = "/assets/1-224"
const imgArrowSubdirectoryForward = `${assetPathPrefix}/c4863.svg`
const imgRectangle9129 = `${assetPathPrefix}/c43ef.png`
const imgRectangle9121 = `${assetPathPrefix}/c0f71.png`
const imgRectangle9130 = `${assetPathPrefix}/69d9a.png`
const imgRectangle9122 = `${assetPathPrefix}/c0474.png`
const imgRectangle9115 = `${assetPathPrefix}/42204.png`
const imgRectangle9131 = `${assetPathPrefix}/154aa.png`
const imgRectangle9127 = `${assetPathPrefix}/ca61e.png`
const imgRectangle9126 = `${assetPathPrefix}/40533.png`
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2 = `${assetPathPrefix}/ec623.png`
const imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1 = `${assetPathPrefix}/91da9.svg`
const imgStellarLogo2 = `${assetPathPrefix}/cf89e.svg`
const imgFacebookLogo = `${assetPathPrefix}/412e8.svg`
const imgYoutubeLogo = `${assetPathPrefix}/5df0a.svg`
const imgInstagramLogo = `${assetPathPrefix}/c6429.svg`
const imgLinkedinLogo = `${assetPathPrefix}/82b38.svg`
const imgFrame = `${assetPathPrefix}/adc25.svg`
const imgFrame1 = `${assetPathPrefix}/06754.svg`
const imgFrame2 = `${assetPathPrefix}/a2092.svg`
const imgImage = `${assetPathPrefix}/afbbf.png`
const imgRectangle9113 = `${assetPathPrefix}/86119.png`
const imgRectangle9114 = `${assetPathPrefix}/844aa.png`
const imgRectangle9116 = `${assetPathPrefix}/a86ce.png`
const imgRectangle9117 = `${assetPathPrefix}/a80f0.png`
const imgRectangle9118 = `${assetPathPrefix}/f4788.png`
const imgRectangle9119 = `${assetPathPrefix}/f48ce.png`
const imgRectangle9120 = `${assetPathPrefix}/f3d14.png`
const imgRectangle9123 = `${assetPathPrefix}/f45ca.png`
const imgRectangle9124 = `${assetPathPrefix}/38bfc.png`
const imgRectangle9125 = `${assetPathPrefix}/e9918.png`
const imgRectangle9128 = `${assetPathPrefix}/2699e.png`
const imgRectangle9132 = `${assetPathPrefix}/234ca.png`
const imgRectangle9133 = `${assetPathPrefix}/02160.png`
const imgRectangle9134 = `${assetPathPrefix}/9b97c.png`
const imgRectangle9135 = `${assetPathPrefix}/69cf3.png`
const imgRectangle9136 = `${assetPathPrefix}/2504f.png`
const imgArrowForwardLong = `${assetPathPrefix}/40ba1.svg`
const imgGroup = `${assetPathPrefix}/ce6e3.svg`
const imgGroup1 = `${assetPathPrefix}/90d4f.svg`
const imgGroup2 = `${assetPathPrefix}/80075.svg`
const imgGroup3 = `${assetPathPrefix}/ee842.svg`
const imgGroup4 = `${assetPathPrefix}/556ab.svg`
const imgGroup5 = `${assetPathPrefix}/920cc.svg`
const imgGroup6 = `${assetPathPrefix}/4e24c.svg`
const imgGroup7 = `${assetPathPrefix}/07745.svg`
const imgGroup8 = `${assetPathPrefix}/aaa10.svg`
const imgGroup9 = `${assetPathPrefix}/47cd2.svg`
const imgGroup10 = `${assetPathPrefix}/1c520.svg`
const imgGroup11 = `${assetPathPrefix}/6bdf1.svg`
const imgGroup12 = `${assetPathPrefix}/ed601.svg`
const imgGroup13 = `${assetPathPrefix}/595b5.svg`
const imgGroup14 = `${assetPathPrefix}/76aef.svg`
const imgGroup15 = `${assetPathPrefix}/348d9.svg`
const imgGroup16 = `${assetPathPrefix}/c60de.svg`
const imgGroup17 = `${assetPathPrefix}/ad55b.svg`
const imgStellarLogo3 = `${assetPathPrefix}/3b80a.svg`
const imgArrowBack = `${assetPathPrefix}/4b3d6.svg`
const imgArrowForwardLong1 = `${assetPathPrefix}/7a85c.svg`
const imgArrowForwardLong2 = `${assetPathPrefix}/b40eb.svg`
const imgVector = `${assetPathPrefix}/ee01d.svg`
const imgGroup18 = `${assetPathPrefix}/78e43.svg`
const imgLayer1 = `${assetPathPrefix}/0836a.svg`
const imgFrame3 = `${assetPathPrefix}/af210.svg`
const imgGroup19 = `${assetPathPrefix}/47a51.svg`
const trustedBrandLogos = [
  "/assets/brands/abercrombie.png",
  "/assets/brands/aldi.png",
  "/assets/brands/amerivaneagle.png",
  "/assets/brands/bestseller.png",
  "/assets/brands/centric.png",
  "/assets/brands/costco.png",
  "/assets/brands/dokers.png",
  "/assets/brands/george.png",
  "/assets/brands/haddadbrands.png",
  "/assets/brands/izod.png",
  "/assets/brands/kohls.png",
  "/assets/brands/levis.png",
  "/assets/brands/next.png",
  "/assets/brands/primark.png",
  "/assets/brands/redtape.png",
  "/assets/brands/sainsburys.png",
  "/assets/brands/tesco.png",
  "/assets/brands/walmart.png",
]


function TrustedBrandMarquee({
  direction = "left",
}: {
  direction?: "left" | "right"
}) {
  // Duplicate the logos so the animation can loop continuously without a visible jump.
  const logos = [...trustedBrandLogos, ...trustedBrandLogos]

  return (
    <div className="trusted-brand-marquee">
      <div
        className={`trusted-brand-track ${
          direction === "right"
            ? "trusted-brand-track-right"
            : "trusted-brand-track-left"
        }`}
      >
        {logos.map((logo, index) => (
          <div className="trusted-brand-card" key={`${logo}-${index}`}>
            <img
              src={logo}
              alt="Trusted global brand"
              className="trusted-brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


type Component1Props = {
  className?: string
  property1?: "View"
}

function Component1({ className, property1 = "View" }: Component1Props) {
  return (
    <div
      className={
        className ||
        "bg-[#1d1d1d] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px]"
      }
      data-node-id="1:107"
    >
      <div
        className="h-[18px] overflow-clip relative shrink-0 w-[86px]"
        data-node-id="1:108"
        data-name="Frame"
      >
        <div
          className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[0] left-0 not-italic text-[#f6f6f6] text-[16px] top-0 whitespace-nowrap"
          data-node-id="1:109"
        >
          <p className="leading-[1.2] mb-0">LET’S TALK</p>
          <p className="leading-[1.2]">LET’S TALK</p>
        </div>
      </div>
      <div
        className="overflow-clip relative shrink-0 size-[18px]"
        data-node-id="1:110"
        data-name="Frame"
      >
        <div
          className="absolute left-0 size-[18px] top-0"
          data-node-id="1:111"
          data-name="arrow-subdirectory-forward"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgArrowSubdirectoryForward}
          />
        </div>
        <div
          className="absolute left-0 size-[18px] top-[20px]"
          data-node-id="1:112"
          data-name="arrow-subdirectory-forward"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgArrowSubdirectoryForward}
          />
        </div>
      </div>
    </div>
  )
}

function Footer({ className }: { className?: string }) {
  return (
    <div
      className={
        className || "bg-white h-[593px] overflow-clip relative w-[1920px]"
      }
      data-node-id="1:7"
      data-name="Footer"
    >
      <div
        className="absolute contents left-[180px] top-[399px]"
        data-node-id="1:8"
        data-name="Mask group"
      >
        <div
          className="absolute h-[603.833px] left-[-47.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[227.772px_167.27px] mask-size-[1560px_153.729px] top-[231.73px] w-[2225.521px]"
          data-node-id="1:17"
          style={{
            maskImage: `url("${imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds1}")`,
          }}
          data-name="black-fabric-draped-elegant-folds-abstract-texture-design-backgrounds 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={
              imgBlackFabricDrapedElegantFoldsAbstractTextureDesignBackgrounds2
            }
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex items-start justify-between left-1/2 top-[71px] w-[1560px]"
        data-node-id="1:18"
        data-name="Frame"
      >
        <div
          className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[454px]"
          data-node-id="1:19"
          data-name="Frame"
        >
          <div
            className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
            data-node-id="1:20"
            data-name="Frame"
          >
            <div
              className="h-[80px] relative shrink-0 w-[175px]"
              data-node-id="1:21"
              data-name="Stellar_Logo 2"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgStellarLogo2}
              />
            </div>
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#191919] text-[18px] w-[min-content]"
              data-node-id="1:35"
            >
              <p className="leading-[1.5]">
                We are a sustainable clothing and garment manufacturer, driven
                by responsible practices, empowered people and a healthier
                planet.
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0"
            data-node-id="1:36"
            data-name="Frame"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="1:37"
              data-name="FacebookLogo"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFacebookLogo}
              />
            </div>
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="1:42"
              data-name="YoutubeLogo"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgYoutubeLogo}
              />
            </div>
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="1:46"
              data-name="InstagramLogo"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgInstagramLogo}
              />
            </div>
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="1:51"
              data-name="LinkedinLogo"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgLinkedinLogo}
              />
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[200px]"
          data-node-id="1:58"
          data-name="Frame"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="1:59"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap"
              data-node-id="1:60"
            >
              <p className="leading-[1.2]">Quick Links</p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap"
            data-node-id="1:61"
            data-name="Frame"
          >
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:62"
            >
              <p className="leading-[1.2]">Home</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:63"
            >
              <p className="leading-[1.2]">About Us</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:64"
            >
              <p className="leading-[1.2]">Our Capabilities</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:65"
            >
              <p className="leading-[1.2]">Our Factories</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:66"
            >
              <p className="leading-[1.2]">Sustainability</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:67"
            >
              <p className="leading-[1.2]">Products</p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[266px]"
          data-node-id="1:68"
          data-name="Frame"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="1:69"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap"
              data-node-id="1:70"
            >
              <p className="leading-[1.2]">Support</p>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap"
            data-node-id="1:71"
            data-name="Frame"
          >
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:72"
            >
              <p className="leading-[1.2]">Contact Us</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:73"
            >
              <p className="leading-[1.2]">Privacy Policy</p>
            </div>
            <div
              className="flex flex-col justify-center relative shrink-0"
              data-node-id="1:74"
            >
              <p className="leading-[1.2]">Terms of Service</p>
            </div>
            <div
              className="flex flex-col justify-center opacity-0 relative shrink-0"
              data-node-id="1:75"
            >
              <p className="leading-[1.2]">Our Factories</p>
            </div>
            <div
              className="flex flex-col justify-center opacity-0 relative shrink-0"
              data-node-id="1:76"
            >
              <p className="leading-[1.2]">Sustainability</p>
            </div>
            <div
              className="flex flex-col justify-center opacity-0 relative shrink-0"
              data-node-id="1:77"
            >
              <p className="leading-[1.2]">Products</p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[350px]"
          data-node-id="1:78"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[20px] whitespace-nowrap"
            data-node-id="1:79"
          >
            <p className="leading-[1.2]">Contact Info</p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="1:80"
            data-name="Frame"
          >
            <div
              className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[273px]"
              data-node-id="1:81"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-node-id="1:82"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame}
                />
              </div>
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-[245px]"
                data-node-id="1:84"
              >
                <p className="leading-[1.2]">+880 1704-166654</p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[273px]"
              data-node-id="1:85"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-node-id="1:86"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-[245px]"
                data-node-id="1:89"
              >
                <p className="leading-[1.2]">info@stellar-mfg.com</p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="1:90"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-node-id="1:91"
                data-name="Frame"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame2}
                />
              </div>
              <div
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#191919] text-[16px]"
                data-node-id="1:94"
              >
                <p className="leading-[1.2] mb-0">
                  House-441, Road-07, Baridhara DOHS
                </p>
                <p className="leading-[1.2]">Dhaka-1206</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-gradient-to-t from-[6.131%] from-white h-[152px] left-1/2 to-[79.237%] to-[rgba(255,255,255,0)] top-[419px] w-[1920px]"
        data-node-id="1:95"
      />
    </div>
  )
}

export default function Home() {
  return (
    <div
      className="bg-[#fafafa] relative size-full"
      data-node-id="1:224"
      data-name="Home"
    >
      <style>{`
        .trusted-brand-marquee {
          width: 100%;
          height: 120px;
          overflow: hidden;
          position: relative;
        }

        .trusted-brand-track {
          display: flex;
          width: max-content;
          gap: 24px;
          height: 120px;
          will-change: transform;
        }

        .trusted-brand-track-left {
          animation: trustedBrandMoveLeft 36s linear infinite;
        }

        .trusted-brand-track-right {
          animation: trustedBrandMoveRight 36s linear infinite;
        }

        .trusted-brand-card {
          width: 240px;
          height: 120px;
          flex: 0 0 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 6px;
          box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .trusted-brand-logo {
          width: 82%;
          height: 82%;
          object-fit: contain;
          display: block;
        }

        .trusted-brand-marquee:hover .trusted-brand-track {
          animation-play-state: paused;
        }

        @keyframes trustedBrandMoveLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @keyframes trustedBrandMoveRight {
          from {
            transform: translateX(calc(-50% - 12px));
          }
          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .trusted-brand-marquee,
          .trusted-brand-track {
            height: 90px;
          }

          .trusted-brand-card {
            width: 180px;
            height: 90px;
            flex-basis: 180px;
          }

          .trusted-brand-track {
            gap: 16px;
          }

          .trusted-brand-track-left,
          .trusted-brand-track-right {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-brand-track-left,
          .trusted-brand-track-right {
            animation: none;
            transform: none;
          }
        }
      `}</style>
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-[calc(50%+1px)] overflow-clip w-[1920px]" />
      <div
        className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]"
        data-node-id="1:226"
        data-name="Frame"
      >
        <div
          className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]"
          data-node-id="1:227"
          data-name="Image"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgImage}
          />
        </div>
        <div
          className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]"
          data-node-id="1:228"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 0%, rgba(29, 29, 29, 0) 38.932%, rgba(29, 29, 29, 0) 72.244%, rgba(29, 29, 29, 0.8) 100%)",
          }}
          data-name="Linear"
        />
        <div
          className="absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-[305px] w-[999px]"
          data-node-id="1:229"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap"
            data-node-id="1:230"
            data-name="Frame"
          >
            <div
              className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]"
              data-node-id="1:231"
            >
              <p className="leading-[1.2] mb-0">PEOPLE. PRODUCTS.</p>
              <p className="leading-[1.2]">PLANET.</p>
            </div>
            <div
              className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]"
              data-node-id="1:232"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[1.2] mb-0">
                A more sustainable fashion industry.
              </p>
              <p className="leading-[1.2]">is within reach.</p>
            </div>
          </div>
          <div
            className="bg-[#dea36a] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0"
            data-node-id="1:233"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap"
              data-node-id="1:234"
            >
              <p className="leading-[1.2]">Partner With Us</p>
            </div>
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="1:235"
              data-name="arrow-forward-long"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgArrowForwardLong}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start p-[48px] right-[-70px] w-[421px]"
          data-node-id="1:236"
          data-name="Frame"
        >
          <div
            className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full"
            data-node-id="1:237"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:238"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:239"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">BETTER</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:240"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:241"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">FASHION</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:242"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:243"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">BRIGHTER</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:244"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:245"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">TOMORROW</p>
              </div>
            </div>
            <div
              className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]"
              data-node-id="1:246"
            />
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#f9f7f5] content-stretch flex items-center justify-between left-1/2 px-[180px] py-[40px] top-[920px] w-[1920px]"
        data-node-id="1:247"
        data-name="Frame"
      >
        <div
          className="flex flex-[1_0_0] flex-row items-center self-stretch"
          data-node-id="1:248"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0"
              data-node-id="1:249"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:250"
                data-name="Шар_1"
              >
                <div
                  className="absolute inset-[2.63%_0]"
                  data-node-id="1:251"
                  data-name="Group"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup}
                  />
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
              data-node-id="1:258"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]"
                data-node-id="1:259"
              >
                <p className="leading-[1.2]">$150M</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] uppercase"
                data-node-id="1:260"
              >
                <p className="leading-[1.2]">Annual Sales</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px"
          data-node-id="1:261"
        />
        <div
          className="flex flex-[1_0_0] flex-row items-center self-stretch"
          data-node-id="1:262"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0"
              data-node-id="1:263"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:264"
                data-name="Frame"
              >
                <div
                  className="absolute contents inset-[0.04%_5.47%_0_5.47%]"
                  data-node-id="1:265"
                  data-name="Layer_x0020_1"
                >
                  <div
                    className="absolute contents inset-[0.04%_5.47%_0_5.47%]"
                    data-node-id="1:266"
                    data-name="_614439456"
                  >
                    <div
                      className="absolute inset-[26.21%_5.47%_27.15%_62.11%]"
                      data-node-id="1:267"
                      data-name="Group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup1}
                      />
                    </div>
                    <div
                      className="absolute inset-[53.26%_33.79%_0_33.79%]"
                      data-node-id="1:272"
                      data-name="Group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup2}
                      />
                    </div>
                    <div
                      className="absolute inset-[26.6%_62.11%_26.56%_5.47%]"
                      data-node-id="1:277"
                      data-name="Group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup3}
                      />
                    </div>
                    <div
                      className="absolute inset-[0.04%_33.79%_53.32%_33.79%]"
                      data-node-id="1:282"
                      data-name="Group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
              data-node-id="1:287"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]"
                data-node-id="1:288"
              >
                <p className="leading-[1.2]">10,200+</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] uppercase"
                data-node-id="1:289"
              >
                <p className="leading-[1.2]">Employees</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px"
          data-node-id="1:290"
        />
        <div
          className="flex flex-[1_0_0] flex-row items-center self-stretch"
          data-node-id="1:291"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0"
              data-node-id="1:292"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:293"
                data-name="Frame"
              >
                <div
                  className="absolute contents inset-[5.41%_5.39%_5.41%_5.4%]"
                  data-node-id="1:294"
                  data-name="_x30_4_Pie_Chart"
                >
                  <div
                    className="absolute inset-[5.41%_5.39%_5.41%_5.4%]"
                    data-node-id="1:295"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup5}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
              data-node-id="1:299"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]"
                data-node-id="1:300"
              >
                <p className="leading-[1.2]">26M+</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] text-center uppercase"
                data-node-id="1:301"
              >
                <p className="leading-[1.2] mb-0 whitespace-pre">{`Pieces Capacity `}</p>
                <p className="leading-[1.2] whitespace-pre">/ Year</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px"
          data-node-id="1:302"
        />
        <div
          className="flex flex-[1_0_0] flex-row items-center self-stretch"
          data-node-id="1:303"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0"
              data-node-id="1:304"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:305"
                data-name="Layer_5"
              >
                <div
                  className="absolute inset-[4.69%_4.69%_4.69%_1.56%]"
                  data-node-id="1:306"
                  data-name="Group"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup6}
                  />
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-center whitespace-nowrap"
              data-node-id="1:323"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[32px]"
                data-node-id="1:324"
              >
                <p className="leading-[1.2]">3</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[18px] uppercase"
                data-node-id="1:325"
              >
                <p className="leading-[1.2] mb-0 whitespace-pre">{`Manufacturing `}</p>
                <p className="leading-[1.2] whitespace-pre">Facilities</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[rgba(0,0,0,0.1)] h-[150px] relative shrink-0 w-px"
          data-node-id="1:326"
        />
        <div
          className="flex flex-[1_0_0] flex-row items-center self-stretch"
          data-node-id="1:327"
        >
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center p-[16px] relative rounded-[999px] shrink-0"
              data-node-id="1:328"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:329"
                data-name="Слой_1"
              >
                <div
                  className="absolute contents inset-[4.17%_10.02%_4.17%_9.58%]"
                  data-node-id="1:330"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[37.72%_38.64%_38.54%_49.15%]"
                    data-node-id="1:331"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup7}
                    />
                  </div>
                  <div
                    className="absolute inset-[34.92%_47.49%_43.79%_42.54%]"
                    data-node-id="1:333"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup8}
                    />
                  </div>
                  <div
                    className="absolute inset-[4.17%_36.46%_67.18%_35.82%]"
                    data-node-id="1:335"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup9}
                    />
                  </div>
                  <div
                    className="absolute inset-[18.9%_10.02%_53.52%_62.83%]"
                    data-node-id="1:337"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup10}
                    />
                  </div>
                  <div
                    className="absolute inset-[24.56%_65.16%_52.64%_9.58%]"
                    data-node-id="1:339"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup11}
                    />
                  </div>
                  <div
                    className="absolute inset-[38.77%_54.4%_57.46%_36.43%]"
                    data-node-id="1:341"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup12}
                    />
                  </div>
                  <div
                    className="absolute inset-[58.59%_32%_19.33%_31.97%]"
                    data-node-id="1:343"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup13}
                    />
                  </div>
                  <div
                    className="absolute inset-[74.41%_30.79%_4.17%_33.38%]"
                    data-node-id="1:345"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup14}
                    />
                  </div>
                  <div
                    className="absolute inset-[74.35%_61.58%_19.21%_28.39%]"
                    data-node-id="1:347"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup15}
                    />
                  </div>
                  <div
                    className="absolute inset-[74.35%_27.21%_19.21%_62.76%]"
                    data-node-id="1:349"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup16}
                    />
                  </div>
                  <div
                    className="absolute inset-[64.32%_36.45%_9.9%_37.85%]"
                    data-node-id="1:351"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup17}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] whitespace-nowrap"
              data-node-id="1:353"
            >
              <p className="leading-[1.2] mb-0 whitespace-pre">{`A MORE `}</p>
              <p className="leading-[1.2] mb-0 whitespace-pre">{`SUSTAINABLE `}</p>
              <p className="leading-[1.2] whitespace-pre">TOMORROW</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]"
        data-node-id="1:354"
        data-name="Frame"
      >
        <div
          className="h-[60px] relative shrink-0 w-[131px]"
          data-node-id="1:355"
          data-name="Stellar_Logo 2"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgStellarLogo3}
          />
        </div>
        <div
          className="content-stretch flex gap-[16px] items-start relative shrink-0"
          data-node-id="1:369"
          data-name="Frame"
        >
          <div
            className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:370"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap"
              data-node-id="1:371"
            >
              <p className="leading-[1.2]">Home</p>
            </div>
          </div>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:372"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:373"
            >
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:374"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:375"
            >
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:376"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:377"
            >
              <p className="leading-[1.2]">our factories</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:378"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:379"
            >
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:380"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:381"
            >
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex gap-[23px] items-center left-1/2 px-[180px] py-[40px] top-[1348px] w-[1920px]"
        data-node-id="1:383"
        data-name="Frame"
      >
        <div
          className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[371px]"
          data-node-id="1:384"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full"
            data-node-id="1:385"
            data-name="Frame"
          >
            <div
              className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
              data-node-id="1:386"
            >
              <p className="leading-[1.2]">WHAT WE MAKE</p>
            </div>
            <div
              className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full"
              data-node-id="1:387"
            >
              <p className="leading-[1.2]">FASHION FOR EVERY GENERATION</p>
            </div>
            <div
              className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full"
              data-node-id="1:388"
            >
              <p className="leading-[1.2]">
                Versatile, high-quality apparel across menswear, womenswear and
                kidswear for global markets
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[24px] items-start relative shrink-0"
            data-node-id="1:389"
            data-name="Frame"
          >
            <div
              className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0"
              data-node-id="1:390"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="1:391"
                data-name="arrow-back"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowBack}
                />
              </div>
            </div>
            <div
              className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0"
              data-node-id="1:392"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="1:393"
                data-name="arrow-forward-long"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowForwardLong1}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px overflow-x-auto overflow-y-clip p-[2px] relative"
          data-node-id="1:394"
          data-name="Frame"
        >
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]"
            data-node-id="1:395"
            data-name="Frame"
          >
            <div
              className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:396"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
                <img
                  alt=""
                  className="absolute h-[129.86%] left-0 max-w-none top-[-0.17%] w-full"
                  src={imgRectangle9113}
                />
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:397"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                data-node-id="1:398"
              >
                <p className="leading-[1.2]">MENSWEAR</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:399"
              >
                <p className="leading-[1.2]">
                  Timeless style. Everyday versatility.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]"
            data-node-id="1:400"
            data-name="Frame"
          >
            <div
              className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:401"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
                <img
                  alt=""
                  className="absolute h-[108.33%] left-0 max-w-none top-[-0.12%] w-full"
                  src={imgRectangle9114}
                />
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:402"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                data-node-id="1:403"
              >
                <p className="leading-[1.2]">WOMENSWEAR</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:404"
              >
                <p className="leading-[1.2]">
                  Modern fashion. Endless possibilities.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]"
            data-node-id="1:405"
            data-name="Frame"
          >
            <div
              className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:406"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
                <img
                  alt=""
                  className="absolute h-[115.07%] left-0 max-w-none top-[-0.15%] w-full"
                  src={imgRectangle9116}
                />
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:407"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                data-node-id="1:408"
              >
                <p className="leading-[1.2]">KIDSWEAR</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:409"
              >
                <p className="leading-[1.2]">
                  Comfort today. A brighter tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]"
            data-node-id="1:410"
            data-name="Frame"
          >
            <div
              className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:411"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
                <img
                  alt=""
                  className="absolute h-[129.86%] left-0 max-w-none top-[-0.17%] w-full"
                  src={imgRectangle9113}
                />
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:412"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                data-node-id="1:413"
              >
                <p className="leading-[1.2]">MENSWEAR</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:414"
              >
                <p className="leading-[1.2]">
                  Timeless style. Everyday versatility.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]"
            data-node-id="1:415"
            data-name="Frame"
          >
            <div
              className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:416"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
                <img
                  alt=""
                  className="absolute h-[108.33%] left-0 max-w-none top-[-0.12%] w-full"
                  src={imgRectangle9114}
                />
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:417"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                data-node-id="1:418"
              >
                <p className="leading-[1.2]">WOMENSWEAR</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:419"
              >
                <p className="leading-[1.2]">
                  Modern fashion. Endless possibilities.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[372px]"
            data-node-id="1:420"
            data-name="Frame"
          >
            <div
              className="h-[420px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:421"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
                <img
                  alt=""
                  className="absolute h-[115.07%] left-0 max-w-none top-[-0.15%] w-full"
                  src={imgRectangle9116}
                />
              </div>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:422"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                data-node-id="1:423"
              >
                <p className="leading-[1.2]">KIDSWEAR</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:424"
              >
                <p className="leading-[1.2]">
                  Comfort today. A brighter tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[178px] py-[56px] top-[2094px] w-[1920px]"
        data-node-id="1:425"
        data-name="Frame"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:426"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0"
            data-node-id="1:427"
            data-name="Frame"
          >
            <div
              className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]"
              data-node-id="1:428"
            >
              <p className="leading-[1.2]">OUR CAPABILITIES</p>
            </div>
            <div
              className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap"
              data-node-id="1:429"
            >
              <p className="leading-[1.2] mb-0 whitespace-pre">{`IDEAS TO `}</p>
              <p className="leading-[1.2] whitespace-pre">IMPACT</p>
            </div>
          </div>
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[546px]"
            data-node-id="1:430"
          >
            <p className="leading-[1.2]">
              An integrated approach from design and sourcing to manufacturing
              and delivery, with a focus on quality, innovation and
              sustainability
            </p>
          </div>
          <div
            className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0"
            data-node-id="1:431"
            data-name="Frame"
          >
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="1:432"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap"
                data-node-id="1:433"
              >
                <p className="leading-[1.2]">VIEW ALL CAPABILITIES</p>
              </div>
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="1:434"
                data-name="arrow-forward-long"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowForwardLong2}
                />
              </div>
            </div>
            <div
              className="h-[3px] relative shrink-0 w-[153px]"
              data-node-id="1:435"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector}
              />
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[24px] items-center overflow-x-auto overflow-y-clip p-[2px] relative shrink-0 w-full"
          data-node-id="1:436"
          data-name="Frame"
        >
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:437"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:438"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9117}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:439"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:440"
              >
                <p className="leading-[1.2]">{`Design & Product Development`}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:441"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:442"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9118}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:443"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:444"
              >
                <p className="leading-[1.2]">{`Sourcing & Materials`}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:445"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:446"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9119}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:447"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:448"
              >
                <p className="leading-[1.2]">Cutting</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:449"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:450"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9120}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:451"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:452"
              >
                <p className="leading-[1.2]">Manufacturing</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:453"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:454"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9123}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:455"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:456"
              >
                <p className="leading-[1.2]">{`Washing & Finishing`}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:457"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:458"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9124}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:459"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:460"
              >
                <p className="leading-[1.2]">Quality Assurance</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:461"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:462"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9125}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:463"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:464"
              >
                <p className="leading-[1.2]">{`Packing & Logistics`}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[240px]"
            data-node-id="1:465"
            data-name="Frame"
          >
            <div
              className="h-[240px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:466"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9128}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:467"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:468"
              >
                <p className="leading-[1.2]">Sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[178px] py-[80px] top-[2884px] w-[1920px]"
        data-node-id="1:469"
        data-name="Frame"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:470"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0"
            data-node-id="1:471"
            data-name="Frame"
          >
            <div
              className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]"
              data-node-id="1:472"
            >
              <p className="leading-[1.2]">OUR FACTORIES</p>
            </div>
            <div
              className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap"
              data-node-id="1:473"
            >
              <p className="leading-[1.2] mb-0 whitespace-pre">{`A GLOBAL `}</p>
              <p className="leading-[1.2] whitespace-pre">FOOTPRINT.</p>
            </div>
          </div>
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[546px]"
            data-node-id="1:474"
          >
            <p className="leading-[1.2]">
              Three strategic manufacturing facilities across Bangladesh and
              India, combining scale, expertise and responsible practices.
            </p>
          </div>
          <div
            className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0"
            data-node-id="1:475"
            data-name="Frame"
          >
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="1:476"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap"
                data-node-id="1:477"
              >
                <p className="leading-[1.2]">VIEW OUR FACTORIES</p>
              </div>
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="1:478"
                data-name="arrow-forward-long"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgArrowForwardLong2}
                />
              </div>
            </div>
            <div
              className="h-[3px] relative shrink-0 w-[153px]"
              data-node-id="1:479"
              data-name="Vector"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgVector}
              />
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[24px] items-center overflow-clip p-[2px] relative shrink-0 w-full"
          data-node-id="1:480"
          data-name="Frame"
        >
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[504px]"
            data-node-id="1:481"
            data-name="Frame"
          >
            <div
              className="h-[430px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:482"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9132}
              />
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:483"
              data-name="Frame"
            >
              <div
                className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                data-node-id="1:484"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                  data-node-id="1:485"
                >
                  <p className="leading-[1.2]">Good Earth Apparels</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                  data-node-id="1:486"
                >
                  <p className="leading-[1.2]">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#1d1d1d] text-[16px] w-full"
                data-node-id="1:487"
              >
                <p className="leading-[1.2]">LEED Zero | Woven</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[504px]"
            data-node-id="1:488"
            data-name="Frame"
          >
            <div
              className="h-[430px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:489"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9133}
              />
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:490"
              data-name="Frame"
            >
              <div
                className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                data-node-id="1:491"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                  data-node-id="1:492"
                >
                  <p className="leading-[1.2]">Progress Apparels</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                  data-node-id="1:493"
                >
                  <p className="leading-[1.2]">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#1d1d1d] text-[16px] w-full"
                data-node-id="1:494"
              >
                <p className="leading-[1.2]">LEED Gold | Woven / Washing</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center relative rounded-[8px] shrink-0 w-[504px]"
            data-node-id="1:495"
            data-name="Frame"
          >
            <div
              className="h-[430px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:496"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9134}
              />
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[16px] relative shrink-0 w-full"
              data-node-id="1:497"
              data-name="Frame"
            >
              <div
                className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                data-node-id="1:498"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full"
                  data-node-id="1:499"
                >
                  <p className="leading-[1.2]">Knit Gallery</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                  data-node-id="1:500"
                >
                  <p className="leading-[1.2]">Tirupur, India</p>
                </div>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#1d1d1d] text-[16px] w-full"
                data-node-id="1:501"
              >
                <p className="leading-[1.2]">LEED Platinum | Knits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[5071px] w-[1920px]"
        data-node-id="1:502"
        data-name="Frame"
      >
        <div
          className="flex flex-row items-center self-stretch"
          data-node-id="1:503"
        >
          <div
            className="bg-white content-stretch flex flex-col gap-[24px] h-full items-start justify-center pl-[180px] pr-[24px] relative shrink-0 w-[576px]"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full"
              data-node-id="1:504"
              data-name="Frame"
            >
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full"
                data-node-id="1:505"
              >
                <p className="leading-[1.2]">SUSTAINABILITY</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-full whitespace-pre-wrap"
                data-node-id="1:506"
              >
                <p className="leading-[1.2] mb-0">{`RESPONSIBLE FASHION. `}</p>
                <p className="leading-[1.2]">REAL IMPACT.</p>
              </div>
              <div
                className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[16px] w-full"
                data-node-id="1:507"
              >
                <p className="leading-[1.2]">
                  We are committed to people, the planet and a more sustainable
                  fashion industry.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0"
              data-node-id="1:508"
              data-name="Frame"
            >
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="1:509"
                data-name="Frame"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center uppercase whitespace-nowrap"
                  data-node-id="1:510"
                >
                  <p className="leading-[1.2]">OUR SUSTAINABILITY APPROACH</p>
                </div>
                <div
                  className="relative shrink-0 size-[24px]"
                  data-node-id="1:511"
                  data-name="arrow-forward-long"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgArrowForwardLong2}
                  />
                </div>
              </div>
              <div
                className="h-[3px] relative shrink-0 w-[153px]"
                data-node-id="1:512"
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-[1_0_0] h-[434px] min-w-px relative"
          data-node-id="1:513"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgRectangle9135}
          />
        </div>
        <div
          className="flex flex-row items-center self-stretch"
          data-node-id="1:514"
        >
          <div
            className="bg-[#1d4222] content-stretch flex flex-col gap-[32px] h-full items-start justify-center pl-[24px] pr-[180px] relative shrink-0 w-[777px]"
            data-name="Frame"
          >
            <div
              className="content-stretch flex gap-[20px] items-center relative shrink-0"
              data-node-id="1:515"
              data-name="Frame"
            >
              <div
                className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0"
                data-node-id="1:516"
                data-name="Frame"
              >
                <div
                  className="overflow-clip relative shrink-0 size-[24px]"
                  data-node-id="1:517"
                  data-name="Layer_1"
                >
                  <div
                    className="absolute inset-[10.42%_6.94%_6.25%_4.17%]"
                    data-node-id="1:518"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup18}
                    />
                  </div>
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0"
                data-node-id="1:522"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full"
                  data-node-id="1:523"
                >
                  <p className="leading-[1.2]">PEOPLE</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full"
                  data-node-id="1:524"
                >
                  <p className="leading-[1.2]">
                    Safe, fair and empowered communities
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[20px] items-center relative shrink-0"
              data-node-id="1:525"
              data-name="Frame"
            >
              <div
                className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0"
                data-node-id="1:526"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[24px]"
                  data-node-id="1:527"
                  data-name="Layer_1"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgLayer1}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0"
                data-node-id="1:532"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full"
                  data-node-id="1:533"
                >
                  <p className="leading-[1.2]">PRODUCTS</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full"
                  data-node-id="1:534"
                >
                  <p className="leading-[1.2]">
                    Low-impact, long-lasting fashion
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[20px] items-center relative shrink-0"
              data-node-id="1:535"
              data-name="Frame"
            >
              <div
                className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0"
                data-node-id="1:536"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[24px]"
                  data-node-id="1:537"
                  data-name="Frame"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgFrame3}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0"
                data-node-id="1:539"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full"
                  data-node-id="1:540"
                >
                  <p className="leading-[1.2]">PLANET</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full"
                  data-node-id="1:541"
                >
                  <p className="leading-[1.2]">
                    Efficient use of resources and lower emissions
                  </p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[20px] items-center relative shrink-0"
              data-node-id="1:542"
              data-name="Frame"
            >
              <div
                className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center p-[14px] relative rounded-[999px] shrink-0"
                data-node-id="1:543"
                data-name="Frame"
              >
                <div
                  className="overflow-clip relative shrink-0 size-[24px]"
                  data-node-id="1:544"
                  data-name="Capa_1"
                >
                  <div
                    className="absolute inset-[9.42%_1.46%]"
                    data-node-id="1:545"
                    data-name="Group"
                  >
                    <div className="absolute inset-[-2.05%_-1.72%]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={imgGroup19}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0"
                data-node-id="1:563"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#f6f6f6] text-[16px] w-full"
                  data-node-id="1:564"
                >
                  <p className="leading-[1.2]">PARTNERSHIPS</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Regular'] font-normal justify-center relative shrink-0 text-[#e8e8e8] text-[14px] w-full"
                  data-node-id="1:565"
                >
                  <p className="leading-[1.2]">
                    Stronger together for lasting change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[180px] top-[3955px] w-[1920px]"
        data-node-id="1:566"
        data-name="Frame"
      >
        <div
          className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] w-full"
          data-node-id="1:567"
        >
          <p className="leading-[1.2]">TRUSTED BY GLOBAL BRANDS</p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
          data-node-id="1:568"
          data-name="Frame"
        >
          <TrustedBrandMarquee direction="left" />
          <TrustedBrandMarquee direction="right" />
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute drop-shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-[500px] left-1/2 overflow-clip rounded-[8px] top-[4451px] w-[1560px]"
        data-node-id="1:571"
        data-name="Frame"
      >
        <div
          className="absolute bg-white h-[500px] left-0 top-0 w-[1562px]"
          data-node-id="1:572"
        />
        <div
          className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[124px] top-1/2 w-[719px]"
          data-node-id="1:573"
          data-name="Frame"
        >
          <div
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="1:574"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#2f2f2f] text-[16px] w-[min-content]"
              data-node-id="1:575"
            >
              <p className="leading-[1.2]">OUR COMMITMENT</p>
            </div>
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1d1d1d] text-[40px] w-[min-content] whitespace-pre-wrap"
              data-node-id="1:576"
            >
              <p className="leading-[1.2] mb-0">{`LET’S BUILD `}</p>
              <p className="leading-[1.2]">A BRIGHTER TOMORROW</p>
            </div>
            <div
              className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]"
              data-node-id="1:577"
            />
          </div>
          <Component1 className="bg-[#1d1d1d] content-stretch drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
        </div>
        <div
          className="absolute h-[500px] left-[664px] top-0 w-[814px]"
          data-node-id="1:579"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgRectangle9136}
          />
        </div>
      </div>
    </div>
  )
}
