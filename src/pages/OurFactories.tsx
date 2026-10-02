import { useState } from "react"

const assetPathPrefix = "/assets/1-1416"
const imgArrowSubdirectoryForward = `${assetPathPrefix}/c4863.svg`
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
const imgImage = `${assetPathPrefix}/c1f82.png`
const imgRectangle9113 = `${assetPathPrefix}/234ca.png`
const imgRectangle9114 = `${assetPathPrefix}/02160.png`
const imgRectangle9115 = `${assetPathPrefix}/9b97c.png`
const imgRectangle9116 = `${assetPathPrefix}/bc82a.png`
const imgRectangle9117 = `${assetPathPrefix}/a160b.png`
const imgRectangle9118 = `${assetPathPrefix}/f48ce.png`
const imgRectangle9119 = `${assetPathPrefix}/82597.png`
const imgRectangle9120 = `${assetPathPrefix}/68447.png`
const imgRectangle9121 = `${assetPathPrefix}/d90b2.png`
const imgRectangle9172 = `${assetPathPrefix}/24893.png`
const imgRectangle9122 = `${assetPathPrefix}/54e74.png`
const imgRectangle9129 = `${assetPathPrefix}/5494a.png`
const imgRectangle9131 = `${assetPathPrefix}/7524c.png`
const imgRectangle9130 = `${assetPathPrefix}/cd5b4.png`
const imgRectangle9123 = `${assetPathPrefix}/f1d41.png`
const imgRectangle9124 = `${assetPathPrefix}/74b73.png`
const imgRectangle9125 = `${assetPathPrefix}/62e6e.png`
const imgRectangle9132 = `${assetPathPrefix}/facd3.png`
const imgRectangle9133 = `${assetPathPrefix}/347b7.png`
const imgArrowForwardLong = `${assetPathPrefix}/40ba1.svg`
const imgStellarLogo3 = `${assetPathPrefix}/3b80a.svg`
const imgGroup = `${assetPathPrefix}/abd9a.svg`
const imgGroup1 = `${assetPathPrefix}/b765b.svg`
const imgGroup2 = `${assetPathPrefix}/4662c.svg`
const imgGroup3 = `${assetPathPrefix}/0c418.svg`
const imgGroup4 = `${assetPathPrefix}/e2bcf.svg`
const imgGroup5 = `${assetPathPrefix}/4bf20.svg`
const imgLayer1 = `${assetPathPrefix}/55c80.svg`
const imgLayer25 = `${assetPathPrefix}/08ac8.svg`
const imgOutline = `${assetPathPrefix}/79ba6.svg`
const imgGroup6 = `${assetPathPrefix}/99f1f.svg`
const imgGroup7 = `${assetPathPrefix}/e2545.svg`
const imgGroup8 = `${assetPathPrefix}/d79ec.svg`
const imgEllipse4 = `${assetPathPrefix}/baf2d.svg`
const imgEllipse5 = `${assetPathPrefix}/4a5dd.svg`
const imgEllipse6 = `${assetPathPrefix}/7fc7d.svg`
const imgArrowBack = `${assetPathPrefix}/4b3d6.svg`
const imgArrowForwardLong1 = `${assetPathPrefix}/7a85c.svg`
const imgGroup9 = `${assetPathPrefix}/fb6f8.svg`
const imgGroup10 = `${assetPathPrefix}/0bf47.svg`
const imgFrame3 = `${assetPathPrefix}/2cc68.svg`
const imgGroup11 = `${assetPathPrefix}/a8ead.svg`
const imgLayer2 = `${assetPathPrefix}/b6835.svg`
const imgFrame4 = `${assetPathPrefix}/a8b72.svg`
const imgG127 = `${assetPathPrefix}/c017c.svg`
const imgG128 = `${assetPathPrefix}/7052a.svg`
const imgG131 = `${assetPathPrefix}/64f2b.svg`
const imgGroup12 = `${assetPathPrefix}/65148.svg`
const imgGroup13 = `${assetPathPrefix}/40da2.svg`
const imgGroup14 = `${assetPathPrefix}/a74c9.svg`
const imgPlus = `${assetPathPrefix}/b2465.svg`
const imgMinus = `${assetPathPrefix}/86d19.svg`
const imgGroup15 = `${assetPathPrefix}/5ad6f.svg`
const imgLayer3 = `${assetPathPrefix}/db6db.svg`
const imgGroup16 = `${assetPathPrefix}/bdc05.svg`
const imgGroup17 = `${assetPathPrefix}/36b8f.svg`
const imgGroup18 = `${assetPathPrefix}/6f830.svg`
const imgGroup19 = `${assetPathPrefix}/7b83f.svg`
const imgGroup20 = `${assetPathPrefix}/03046.svg`
const imgGroup21 = `${assetPathPrefix}/8cb66.svg`
const imgGroup22 = `${assetPathPrefix}/abc03.svg`
const imgGroup23 = `${assetPathPrefix}/adafb.svg`
const imgGroup24 = `${assetPathPrefix}/a440e.svg`
const imgGroup25 = `${assetPathPrefix}/ba70d.svg`
const imgGroup26 = `${assetPathPrefix}/81aa8.svg`
const imgGroup27 = `${assetPathPrefix}/44d0d.svg`
const imgGroup28 = `${assetPathPrefix}/8d015.svg`
const imgGroup29 = `${assetPathPrefix}/acacb.svg`
const imgGroup30 = `${assetPathPrefix}/5007e.svg`
const certificationsandstandardsLogos = [
  "/assets/geal-certifications/ascb.png",
  "/assets/geal-certifications/betterwork.png",
  "/assets/geal-certifications/global.png",
  "/assets/geal-certifications/gots.png",
  "/assets/geal-certifications/gscs.png",
  "/assets/geal-certifications/leed.png",
  "/assets/geal-certifications/oeko.png",
  "/assets/geal-certifications/organic100.png",
  "/assets/geal-certifications/rso.png",
  "/assets/geal-certifications/scan.png",
  "/assets/geal-certifications/sedex.png",
  "/assets/geal-certifications/social.png",
  "/assets/geal-certifications/supplier.png",
  "/assets/geal-certifications/worldly.png",

]
function CertificationMarquee({
  direction = "left",
}: {
  direction?: "left" | "right"
}) {
  const logos = [...certificationsandstandardsLogos, ...certificationsandstandardsLogos]

  return (
    <div className="certification-marquee">
      <div
        className={`certification-marquee-track ${
          direction === "right"
            ? "certification-marquee-track-right"
            : "certification-marquee-track-left"
        }`}
      >
        {logos.map((logo, index) => (
          <div className="certification-marquee-card" key={`${logo}-${index}`}>
            <img
              src={logo}
              alt="Certification and standard"
              className="certification-marquee-logo"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductMixItem({
  label,
  icon,
  bonding = false,
}: {
  label: string
  icon?: string
  bonding?: boolean
}) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[90px] items-center relative shrink-0 w-[115px]">
      <div className="overflow-clip relative shrink-0 size-[40px]">
        {bonding ? (
          <div className="absolute contents inset-0">
            <div className="absolute flex inset-[2.93%] items-center justify-center">
              <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                <div
                  className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.172px_-1.172px] mask-size-[40px_40px] relative size-full"
                  style={{ maskImage: `url("${imgG127}")` }}
                >
                  <div className="absolute inset-[-1.99%]">
                    <img alt="" className="block max-w-none size-full" src={imgG128} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[31.17%] items-center justify-center">
              <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                <div
                  className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-12.469px_-12.469px] mask-size-[40px_40px] relative size-full"
                  style={{ maskImage: `url("${imgG127}")` }}
                >
                  <div className="absolute inset-[-4.98%]">
                    <img alt="" className="block max-w-none size-full" src={imgG131} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
        )}
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.2]">{label}</p>
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

type FactoryKey = "good-earth" | "progress" | "knit-gallery"

const factoryMeta: Record<FactoryKey, { name: string; location: string }> = {
  "good-earth": { name: "Good Earth Apparels", location: "Dhaka, Bangladesh" },
  progress: { name: "Progress Apparels", location: "Dhaka, Bangladesh" },
  "knit-gallery": { name: "Knit Gallery", location: "Tirupur, India" },
}



type FactoryData = {
  name: string
  location: string
  address: string
  overviewTitle: string
  overviewDescription: string
  employees: string
  productionLines: string
  sewingMachines: string
  piecesPerYear: string
  productionRange: string
  productionCapacity: string
  productMix: string[]
  strengths: string[]
  galleryLabels: string[]
  distance: string
}

// Factory-specific content is kept separately so you can edit each factory
// without changing the layout or another factory's data.
const factoryData: Record<FactoryKey, FactoryData> = {
  "good-earth": {
    name: "Good Earth Apparels",
    location: "Dhaka, Bangladesh",
    address: "Tepirbari, Telihati, Sreepur, Gazipur, Bangladesh. PO: Gazipur-1740.",
    overviewTitle: "Responsible Manufacturing. Real Impact.",
    overviewDescription: "Good Earth Apparels Ltd. is a LEED Zero–certified green garment factory in Bangladesh. We combine scale, innovation and responsible practices to produce high-quality woven garments for global fashion brands while minimising environmental impact.",
    employees: "3,150+", productionLines: "30", sewingMachines: "1,450", piecesPerYear: "8.5M+",
    productionRange: "60–90", productionCapacity: "220,000",
    productMix: [
      "44.4%: Womenswear", 
      "44.4%: Menswear", 
      "11.1%: Kidswear"
    ],
    strengths: [
      "LEED Zero–certified operations",
      "High-quality woven garment production",
      "Integrated, ethical supply chain",
      "Focus on worker welfare and safety",
      "Low-impact, energy-efficient systems",
      "Trusted partner to global fashion brands",
    ],
    galleryLabels: ["Front Entrance", "Aerial View", "Raw Material Store", "Cutting Area", "Sewing Area", "Finishing Area", "Finished Goods Store"],
    distance: "Chittagong Port: ~ 260 km (5–6 hours)",
  },
  progress: {
    name: "Progress Apparels", location: "Dhaka, Bangladesh",
    address: "Tepirbari, Telihati, Sreepur, Gazipur, Bangladesh. PO: Gazipur-1740.",
    overviewTitle: "Responsible Manufacturing. Real Impact.",
    overviewDescription: "Progress Apparels is a apparel manufacturer delivering design-to-delivery solutions with strong capabilities across product development, manufacturing, and global sourcing, known for speed, scale, and quality execution..",
    employees: "3,550+", productionLines: "45", sewingMachines: "1,850", piecesPerYear: "9.6M",
    productionRange: "60-90", productionCapacity: "217,800",
    productMix: [
      "30%: Womenswear", 
      "50%: Menswear", 
      "20%: Kidswear"
    ],
    strengths: [
      "End-to-End Apparel Manufacturing", 
      "Advanced Garment Washing & Finishing", 
      "Expertise in Cotton, Denim & Stretch", 
      "Sustainable, Scalable Production", 
      "—", 
      "—"
    ],
    galleryLabels: ["Front Entrance", "Aerial View", "Raw Material Store", "Cutting Area", "Sewing Area", "Finishing Area", "Finished Goods Store"],
    distance: "Chittagong Port: ~ 260 km (5–6 hours)",
  },
  "knit-gallery": {
    name: "Knit Gallery", location: "Tirupur, India",
    address: "Factory-specific address will be added here.",
    overviewTitle: "Responsible Manufacturing. Real Impact.",
    overviewDescription: "Add the Knit Gallery factory overview here. This field is independent from Good Earth Apparels and Progress Apparels and can be edited separately.",
    employees: "—", productionLines: "—", sewingMachines: "—", piecesPerYear: "—",
    productionRange: "—", productionCapacity: "—",
    productMix: ["—", "—", "—"],
    strengths: ["—", "—", "—", "—", "—", "—"],
    galleryLabels: ["Front Entrance", "Aerial View", "Raw Material Store", "Cutting Area", "Sewing Area", "Finishing Area", "Finished Goods Store"],
    distance: "Factory-specific distance information will be added here.",
  },
}

export default function OurFactories() {
  const [selectedFactory, setSelectedFactory] = useState<FactoryKey>("good-earth")
  return (
    <div
      className="bg-[#fafafa] relative size-full"
      data-node-id="1:1416"
      data-name="our factories"
    >
      <style>{`
        .certification-marquee {
          width: 100%;
          height: 120px;
          overflow: hidden;
          position: relative;
        }

        .certification-marquee-track {
          display: flex;
          width: max-content;
          gap: 24px;
          height: 120px;
          will-change: transform;
        }

        .certification-marquee-track-left {
          animation: certificationMoveLeft 34s linear infinite;
        }

        .certification-marquee-track-right {
          animation: certificationMoveRight 34s linear infinite;
        }

        .certification-marquee-card {
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

        .certification-marquee-logo {
          width: 82%;
          height: 82%;
          object-fit: contain;
          display: block;
        }

        .certification-marquee:hover .certification-marquee-track {
          animation-play-state: paused;
        }

        @keyframes certificationMoveLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        @keyframes certificationMoveRight {
          from {
            transform: translateX(calc(-50% - 12px));
          }
          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .certification-marquee,
          .certification-marquee-track {
            height: 90px;
          }

          .certification-marquee-card {
            width: 180px;
            height: 90px;
            flex-basis: 180px;
          }

          .certification-marquee-track {
            gap: 16px;
          }

          .certification-marquee-track-left,
          .certification-marquee-track-right {
            animation-duration: 26s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .certification-marquee-track-left,
          .certification-marquee-track-right {
            animation: none;
            transform: none;
          }
        }
      `}</style>
      <Footer className="-translate-x-1/2 absolute bg-white bottom-0 h-[593px] left-[calc(50%+1px)] overflow-clip w-[1920px]" />
      <div
        className="absolute bg-white h-[920px] left-0 overflow-clip top-0 w-[1920px]"
        data-node-id="1:1418"
        data-name="Frame"
      >
        <div
          className="-translate-x-1/2 absolute h-[920px] left-1/2 top-0 w-[1920px]"
          data-node-id="1:1419"
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
          data-node-id="1:1420"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(29, 29, 29, 0.4) 0%, rgba(29, 29, 29, 0) 100%), linear-gradient(90.00000034559805deg, rgb(29, 29, 29) 7.6923%, rgba(29, 29, 29, 0) 49.038%, rgba(29, 29, 29, 0) 76.923%, rgba(29, 29, 29, 0.8) 100%)",
          }}
          data-name="Linear"
        />
        <div
          className="absolute content-stretch flex flex-col gap-[40px] items-start justify-center left-[179px] top-[305px] w-[999px]"
          data-node-id="1:1421"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#f6f6f6] w-full whitespace-nowrap"
            data-node-id="1:1422"
            data-name="Frame"
          >
            <div
              className="flex flex-col font-['Inter:Bold'] font-bold justify-center not-italic relative shrink-0 text-[60px]"
              data-node-id="1:1423"
            >
              <p className="leading-[1.2] mb-0 whitespace-pre">{`People. Products. `}</p>
              <p className="leading-[1.2] whitespace-pre">
                A Greener Tomorrow.
              </p>
            </div>
            <div
              className="flex flex-col font-['Saira:Regular'] font-normal justify-center relative shrink-0 text-[24px]"
              data-node-id="1:1424"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[1.2] mb-0 whitespace-pre">{`A LEED Zero–certified green garment factory specializing in high-quality `}</p>
              <p className="leading-[1.2] whitespace-pre">
                woven garments with a strong focus on sustainability, innovation
                and ethical manufacturing.
              </p>
            </div>
          </div>
          <div
            className="bg-[#dea36a] content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[22px] py-[14px] relative rounded-[4px] shrink-0"
            data-node-id="1:1425"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-center uppercase whitespace-nowrap"
              data-node-id="1:1426"
            >
              <p className="leading-[1.2]">Partner With Us</p>
            </div>
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="1:1427"
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
          className="absolute backdrop-blur-[7px] bg-[rgba(29,29,29,0.8)] bottom-0 content-stretch flex flex-col items-start pl-[48px] pr-[180px] py-[48px] right-0"
          data-node-id="1:1428"
          data-name="Frame"
        >
          <div
            className="border-[#dea36a] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] relative shrink-0 w-full"
            data-node-id="1:1429"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:1430"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:1431"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">PEOPLE</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:1432"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:1433"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">PRODUCTS</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:1434"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:1435"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">PLANET</p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-center relative shrink-0"
              data-node-id="1:1436"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Saira:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f6f6] text-[20px] tracking-[2.8px] whitespace-nowrap"
                data-node-id="1:1437"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                <p className="leading-[1.2]">A BRIGHTER TOMORROW</p>
              </div>
            </div>
            <div
              className="bg-[#dea36a] h-[2px] relative shrink-0 w-[68px]"
              data-node-id="1:1438"
            />
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute backdrop-blur-[7px] bg-[rgba(246,246,246,0.1)] content-stretch flex h-[90px] items-center justify-between left-1/2 px-[180px] py-[10px] top-0 w-[1920px]"
        data-node-id="1:1439"
        data-name="Frame"
      >
        <div
          className="h-[60px] relative shrink-0 w-[131px]"
          data-node-id="1:1440"
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
          data-node-id="1:1454"
          data-name="Frame"
        >
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:1455"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:1456"
            >
              <p className="leading-[1.2]">Home</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:1457"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:1458"
            >
              <p className="leading-[1.2]">about us</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:1459"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:1460"
            >
              <p className="leading-[1.2]">our capabilities</p>
            </div>
          </a>
          <div
            className="border-[#dea36a] border-b-[1.5px] border-solid content-stretch flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:1461"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dea36a] text-[16px] uppercase whitespace-nowrap"
              data-node-id="1:1462"
            >
              <p className="leading-[1.2]">our factories</p>
            </div>
          </div>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:1463"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:1464"
            >
              <p className="leading-[1.2]">Sustainability</p>
            </div>
          </a>
          <a
            className="content-stretch cursor-pointer flex items-center justify-center px-[4px] py-[10px] relative shrink-0"
            data-node-id="1:1465"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6f6f6] text-[16px] text-left uppercase whitespace-nowrap"
              data-node-id="1:1466"
            >
              <p className="leading-[1.2]">Products</p>
            </div>
          </a>
        </div>
        <Component1 className="bg-[#1d1d1d] content-stretch cursor-pointer drop-shadow-[0px_2px_3px_rgba(0,0,0,0.1)] flex gap-[6px] items-center px-[26px] py-[14px] relative rounded-[4px] shrink-0" />
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-1/2 overflow-clip top-[944px] w-[1560px]"
        data-node-id="1:1468"
        data-name="Factory Selector"
      >
        {([
          { key: "good-earth", image: imgRectangle9113 },
          { key: "progress", image: imgRectangle9114 },
          { key: "knit-gallery", image: imgRectangle9115 },
        ] as { key: FactoryKey; image: string }[]).map((factory) => {
          const meta = factoryMeta[factory.key]
          const isSelected = selectedFactory === factory.key

          return (
            <button
              key={factory.key}
              type="button"
              onClick={() => setSelectedFactory(factory.key)}
              aria-pressed={isSelected}
              className={`bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-[504px] text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-[#dea36a] border-b-3 drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)]"
                  : "drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)]"
              }`}
            >
              <div className="flex-[1_0_0] h-[120px] min-w-px relative rounded-[6px] overflow-hidden">
                <img
                  alt={meta.name}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full"
                  src={factory.image}
                />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[16px] relative">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center relative shrink-0 text-[#1d1d1d] text-[20px] w-full">
                    <p className="leading-[1.2]">{meta.name}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] w-full">
                    <p className="leading-[1.2]">{meta.location}</p>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
      {(
        <>
      <div
        className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center justify-center left-1/2 px-[180px] py-[40px] top-[1183px] w-[1920px]"
        data-node-id="1:1487"
        data-name="Frame"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-[504px]"
          data-node-id="1:1488"
          data-name="Frame"
        >
          <div
            className="flex flex-col font-['Inter:Medium'] font-medium justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[14px] w-[min-content]"
            data-node-id="1:1489"
          >
            <p className="leading-[1.2]">FACILITY OVERVIEW</p>
          </div>
          <div
            className="flex flex-col font-['Inter:Bold'] font-bold justify-center relative shrink-0 text-[#1d1d1d] text-[40px] w-[501px]"
            data-node-id="1:1490"
          >
            <p className="leading-[1.2]">
              Responsible Manufacturing. Real Impact.
            </p>
          </div>
          <div
            className="flex flex-col font-['Inter:Regular'] font-normal justify-center min-w-full relative shrink-0 text-[#4a4a4a] text-[16px] w-[min-content]"
            data-node-id="1:1491"
          >
            <p className="leading-[1.2]">
              {factoryData[selectedFactory].overviewDescription}
            </p>
          </div>
        </div>
        <div
          className="bg-[#f9f7f5] content-stretch flex flex-col gap-[8px] h-[290px] items-center justify-center relative shrink-0 w-[636px]"
          data-node-id="1:1492"
          data-name="Frame"
        >
          <div
            className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full"
            data-node-id="1:1493"
            data-name="Frame"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative"
              data-node-id="1:1494"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:1495"
                data-name="Layer_1"
              >
                <div
                  className="absolute contents inset-[7.29%_3.47%_9.38%_4.86%]"
                  data-node-id="1:1496"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[7.29%_30.56%_55.21%_31.94%]"
                    data-node-id="1:1497"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup}
                    />
                  </div>
                  <div
                    className="absolute inset-[9.9%_69.32%_57.29%_15.28%]"
                    data-node-id="1:1499"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup1}
                    />
                  </div>
                  <div
                    className="absolute inset-[9.6%_13.89%_57.71%_71.33%]"
                    data-node-id="1:1501"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup2}
                    />
                  </div>
                  <div
                    className="absolute inset-[53.13%_20.14%_9.38%_21.53%]"
                    data-node-id="1:1503"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup3}
                    />
                  </div>
                  <div
                    className="absolute inset-[55.04%_3.47%_9.38%_79.27%]"
                    data-node-id="1:1505"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup4}
                    />
                  </div>
                  <div
                    className="absolute inset-[54.62%_77.89%_9.38%_4.86%]"
                    data-node-id="1:1507"
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
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="1:1509"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]"
                  data-node-id="1:1510"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].employees}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase"
                  data-node-id="1:1511"
                >
                  <p className="leading-[1.2]">Employees</p>
                </div>
              </div>
            </div>
            <div
              className="bg-[rgba(0,0,0,0.1)] h-[100px] relative shrink-0 w-px"
              data-node-id="1:1512"
            />
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative"
              data-node-id="1:1513"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[48px]"
                data-node-id="1:1514"
                data-name="Layer_1"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgLayer1}
                />
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="1:1516"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]"
                  data-node-id="1:1517"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].productionLines}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] uppercase"
                  data-node-id="1:1518"
                >
                  <p className="leading-[1.2]">Production Lines</p>
                </div>
              </div>
            </div>
            <div
              className="bg-[rgba(0,0,0,0.1)] h-[100px] relative shrink-0 w-px"
              data-node-id="1:1519"
            />
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative"
              data-node-id="1:1520"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:1521"
                data-name="Frame"
              >
                <div
                  className="absolute inset-[8.9%_3.17%]"
                  data-node-id="1:1522"
                  data-name="Layer 25"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgLayer25}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="1:1529"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]"
                  data-node-id="1:1530"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].sewingMachines}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase"
                  data-node-id="1:1531"
                >
                  <p className="leading-[1.2]">Sewing Machines</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-[550px]"
            data-node-id="1:1532"
          />
          <div
            className="bg-[#f9f7f5] content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full"
            data-node-id="1:1533"
            data-name="Frame"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative"
              data-node-id="1:1534"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[48px]"
                data-node-id="1:1535"
                data-name="Outline"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgOutline}
                />
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="1:1538"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]"
                  data-node-id="1:1539"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].piecesPerYear}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase"
                  data-node-id="1:1540"
                >
                  <p className="leading-[1.2]">Pieces per Year</p>
                </div>
              </div>
            </div>
            <div
              className="bg-[rgba(0,0,0,0.1)] h-[100px] relative shrink-0 w-px"
              data-node-id="1:1541"
            />
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative"
              data-node-id="1:1542"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:1543"
                data-name="Layer_1"
              >
                <div
                  className="absolute inset-[4.17%_6.11%_4.17%_6.25%]"
                  data-node-id="1:1544"
                  data-name="Group"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup6}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="1:1561"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]"
                  data-node-id="1:1562"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].productionRange}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] uppercase"
                  data-node-id="1:1563"
                >
                  <p className="leading-[1.2]">Days Lead Time</p>
                </div>
              </div>
            </div>
            <div
              className="bg-[rgba(0,0,0,0.1)] h-[100px] relative shrink-0 w-px"
              data-node-id="1:1564"
            />
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-w-px relative"
              data-node-id="1:1565"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[48px]"
                data-node-id="1:1566"
                data-name="map"
              >
                <div
                  className="absolute inset-[11.06%_14%]"
                  data-node-id="1:1567"
                  data-name="Group"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup7}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap"
                data-node-id="1:1573"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:Bold'] justify-center relative shrink-0 text-[#1d1d1d] text-[20px]"
                  data-node-id="1:1574"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].productionCapacity}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[#4a4a4a] text-[14px] text-center uppercase"
                  data-node-id="1:1575"
                >
                  <p className="leading-[1.2]">Sq. Ft. Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#f9f7f5] content-stretch flex flex-col gap-[22px] items-center p-[8px] relative shrink-0 w-[372px]"
          data-node-id="1:1576"
          data-name="Frame"
        >
          <div
            className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            data-node-id="1:1577"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-full"
              data-node-id="1:1578"
            >
              <p className="leading-[1.2]">Product Mix</p>
            </div>
            <div
              className="content-stretch flex gap-[62px] items-center relative shrink-0 w-full"
              data-node-id="1:1579"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[80px]"
                data-node-id="1:1580"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgGroup8}
                />
              </div>
              <div
                className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[158px]"
                data-node-id="1:1584"
                data-name="Frame"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="1:1585"
                  data-name="Frame"
                >
                  <div
                    className="relative shrink-0 size-[8px]"
                    data-node-id="1:1586"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgEllipse4}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                    data-node-id="1:1587"
                  >
                    <p className="leading-[1.2]">{factoryData[selectedFactory].productMix[0]}</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="1:1588"
                  data-name="Frame"
                >
                  <div
                    className="relative shrink-0 size-[8px]"
                    data-node-id="1:1589"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgEllipse5}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                    data-node-id="1:1590"
                  >
                    <p className="leading-[1.2]">{factoryData[selectedFactory].productMix[1]}</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="1:1591"
                  data-name="Frame"
                >
                  <div
                    className="relative shrink-0 size-[8px]"
                    data-node-id="1:1592"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgEllipse6}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                    data-node-id="1:1593"
                  >
                    <p className="leading-[1.2]">{factoryData[selectedFactory].productMix[2]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            data-node-id="1:1594"
            data-name="Frame"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[14px] uppercase w-[min-content]"
              data-node-id="1:1595"
            >
              <p className="leading-[1.2]">Key Strengths</p>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
              data-node-id="1:1596"
              data-name="Frame"
            >
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                data-node-id="1:1597"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[8px]"
                  data-node-id="1:1598"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse4}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                  data-node-id="1:1599"
                >
                  <p className="leading-[1.2]">
                    {factoryData[selectedFactory].strengths[0]}
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="1:1600"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[8px]"
                  data-node-id="1:1601"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse4}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                  data-node-id="1:1602"
                >
                  <p className="leading-[1.2]">
                    {factoryData[selectedFactory].strengths[1]}
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="1:1603"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[8px]"
                  data-node-id="1:1604"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse4}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                  data-node-id="1:1605"
                >
                  <p className="leading-[1.2]">
                    {factoryData[selectedFactory].strengths[2]}
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="1:1606"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[8px]"
                  data-node-id="1:1607"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse4}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                  data-node-id="1:1608"
                >
                  <p className="leading-[1.2]">
                    {factoryData[selectedFactory].strengths[3]}
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="1:1609"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[8px]"
                  data-node-id="1:1610"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse4}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                  data-node-id="1:1611"
                >
                  <p className="leading-[1.2]">
                    {factoryData[selectedFactory].strengths[4]}
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="1:1612"
                data-name="Frame"
              >
                <div
                  className="relative shrink-0 size-[8px]"
                  data-node-id="1:1613"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgEllipse4}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center whitespace-nowrap"
                  data-node-id="1:1614"
                >
                  <p className="leading-[1.2]">
                    {factoryData[selectedFactory].strengths[5]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 px-[180px] py-[56px] top-[1653px] w-[1920px]"
        data-node-id="1:1615"
        data-name="Frame"
      >
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="1:1616"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap"
            data-node-id="1:1617"
          >
            <p className="leading-[1.2]">INSIDE OUR FACTORY</p>
          </div>
          <div
            className="content-stretch flex gap-[24px] items-start relative shrink-0"
            data-node-id="1:1618"
            data-name="Frame"
          >
            <div
              className="bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex items-center justify-center p-[8px] relative rounded-[999px] shrink-0"
              data-node-id="1:1619"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="1:1620"
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
              data-node-id="1:1621"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-node-id="1:1622"
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
          className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
          data-node-id="1:1623"
          data-name="Frame"
        >
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1624"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1625"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9116}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1626"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:1627"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[0]}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1628"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1629"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9113}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1630"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:1631"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[1]}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1632"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1633"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9117}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1634"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] whitespace-nowrap"
                data-node-id="1:1635"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[2]}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1636"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1637"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9118}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1638"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:1639"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[3]}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1640"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1641"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9119}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1642"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:1643"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[4]}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1644"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1645"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9120}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1646"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:1647"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[5]}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f7f5] content-stretch drop-shadow-[0px_1px_3px_rgba(0,0,0,0.06)] flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[8px]"
            data-node-id="1:1648"
            data-name="Frame"
          >
            <div
              className="h-[180px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
              data-node-id="1:1649"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full"
                src={imgRectangle9121}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full"
              data-node-id="1:1650"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[14px] w-full"
                data-node-id="1:1651"
              >
                <p className="leading-[1.2]">{factoryData[selectedFactory].galleryLabels[6]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[24px] items-start left-1/2 px-[180px] py-[40px] top-[2174px] w-[1920px]"
        data-node-id="1:1652"
        data-name="Frame"
      >
        <div
          className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px p-[16px] relative self-stretch"
          data-node-id="1:1653"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] uppercase w-full"
            data-node-id="1:1654"
          >
            <p className="leading-[1.2]">Product Mix</p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full"
            data-node-id="1:1655"
            data-name="Frame"
          >
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-name="Product Mix - Row 1"
            >
              <ProductMixItem label="Woven Garments" icon={imgGroup9} />
              <div className="bg-[rgba(0,0,0,0.1)] h-[64px] relative shrink-0 w-[1.5px]" />
              <ProductMixItem label="Washing" icon={imgGroup11} />
              <div className="bg-[rgba(0,0,0,0.1)] h-[64px] relative shrink-0 w-[1.5px]" />
              <ProductMixItem label="Product Development" icon={imgLayer2} />
            </div>
            <div
              className="content-stretch flex items-center justify-center px-[31px] relative shrink-0 w-full"
              data-name="Product Mix - Row Divider"
            >
              <div className="bg-[rgba(0,0,0,0.1)] h-[1.5px] relative shrink-0 w-[180px]" />
            </div>
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-name="Product Mix - Row 2"
            >
              <ProductMixItem label="Sustainability" icon={imgFrame4} />
              <div className="bg-[rgba(0,0,0,0.1)] h-[64px] relative shrink-0 w-[1.5px]" />
              <ProductMixItem label="Bonding" bonding />
              <div className="bg-[rgba(0,0,0,0.1)] h-[64px] relative shrink-0 w-[1.5px]" />
              <ProductMixItem label="Quality Assurance" icon={imgGroup12} />
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative self-stretch shrink-0 w-[635px]"
          data-node-id="1:1745"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] uppercase w-full"
            data-node-id="1:1746"
          >
            <p className="leading-[1.2]">Factory</p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px relative w-full"
            data-node-id="1:1747"
            data-name="Frame"
          >
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative"
              data-node-id="1:1748"
              data-name="Frame"
            >
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.2] min-w-0 not-italic relative shrink-0 text-[#1d1d1d] w-[205px]"
                data-node-id="1:1749"
                data-name="Frame"
              >
                <div
                  className="flex flex-col font-['Saira_SemiCondensed:SemiBold'] justify-center relative shrink-0 text-[20px] w-full"
                  data-node-id="1:1750"
                >
                  <p className="leading-[1.2]">{factoryMeta[selectedFactory].name}</p>
                </div>
                <div
                  className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0 text-[14px] w-full"
                  data-node-id="1:1751"
                >
                  <p className="leading-[1.2]">{factoryData[selectedFactory].location}</p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full"
                data-node-id="1:1752"
                data-name="Frame"
              >
                <div
                  className="overflow-clip relative shrink-0 size-[20px]"
                  data-node-id="1:1753"
                  data-name="Capa_1"
                >
                  <div
                    className="absolute contents inset-[9.38%_18%_3.13%_18.75%]"
                    data-node-id="1:1754"
                    data-name="Group"
                  >
                    <div
                      className="absolute inset-[9.38%_18%_3.13%_18.75%]"
                      data-node-id="1:1755"
                      data-name="Group"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgGroup13}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-start leading-[1.4] min-w-0 not-italic relative text-[14px] text-black whitespace-normal break-words"
                  data-node-id="1:1757"
                >
                  {factoryData[selectedFactory].address}
                </div>
              </div>
            </div>
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
              data-node-id="1:1758"
            >
              <div
                className="col-1 h-[206px] ml-0 mt-0 relative row-1 w-[355px]"
                data-node-id="1:1759"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgRectangle9172}
                />
              </div>
              <div
                className="col-1 ml-[158px] mt-[81px] overflow-clip relative row-1 size-[20px]"
                data-node-id="1:1760"
                data-name="Capa_1"
              >
                <div
                  className="absolute contents inset-[9.38%_18%_3.12%_18.75%]"
                  data-node-id="1:1761"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[9.38%_18%_3.12%_18.75%]"
                    data-node-id="1:1762"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup14}
                    />
                  </div>
                </div>
              </div>
              <div
                className="border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid col-1 content-stretch flex flex-col items-start ml-[322.67px] mt-[149px] relative rounded-[2px] row-1 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.06)] w-[24px]"
                data-node-id="1:1764"
                data-name="Frame"
              >
                <div
                  className="bg-white content-stretch flex items-center p-[5px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full"
                  data-node-id="1:1765"
                  data-name="Frame"
                >
                  <div
                    className="relative shrink-0 size-[14px]"
                    data-node-id="1:1766"
                    data-name="plus"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgPlus}
                    />
                  </div>
                </div>
                <div
                  className="bg-white content-stretch flex items-center p-[5px] relative rounded-bl-[2px] rounded-br-[2px] shrink-0 w-full"
                  data-node-id="1:1767"
                  data-name="Frame"
                >
                  <div
                    className="relative shrink-0 size-[14px]"
                    data-node-id="1:1768"
                    data-name="minus"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgMinus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative self-stretch shrink-0 w-[238px]"
          data-node-id="1:1769"
          data-name="Frame"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] uppercase w-full"
            data-node-id="1:1770"
          >
            <p className="leading-[1.2]">Distance Measure</p>
          </div>
          <div
            className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full"
            data-node-id="1:1771"
            data-name="Frame"
          >
            <div
              className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
              data-node-id="1:1772"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[32px]"
                data-node-id="1:1773"
                data-name="Layer_1"
              >
                <div className="absolute inset-[6.25%]" data-node-id="1:1774">
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgGroup15}
                  />
                </div>
              </div>
              <div
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#4a4a4a] text-[14px]"
                data-node-id="1:1802"
              >
                <p className="leading-[1.2]">
                  Hazrat Shahjalal International Airport: ~ 32 km (45 mins)
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
              data-node-id="1:1803"
              data-name="Frame"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-node-id="1:1804"
                data-name="Layer_1"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgLayer3}
                />
              </div>
              <div
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#4a4a4a] text-[14px]"
                data-node-id="1:1807"
              >
                <p className="leading-[1.2]">
                  Dhaka City Centre: ~ 24 km (40 mins)
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
              data-node-id="1:1808"
              data-name="Frame"
            >
              <div
                className="overflow-clip relative shrink-0 size-[32px]"
                data-node-id="1:1809"
                data-name="Layer_1"
              >
                <div
                  className="absolute contents inset-[9.67%_1.39%_9.67%_1.45%]"
                  data-node-id="1:1810"
                  data-name="Group"
                >
                  <div
                    className="absolute inset-[77%_63.06%_10.33%_4.36%]"
                    data-node-id="1:1811"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup16}
                    />
                  </div>
                  <div
                    className="absolute inset-[25.72%_85.1%_19.89%_11.78%]"
                    data-node-id="1:1813"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup17}
                    />
                  </div>
                  <div
                    className="absolute inset-[26%_70.48%_19.89%_26.39%]"
                    data-node-id="1:1815"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup18}
                    />
                  </div>
                  <div
                    className="absolute inset-[9.67%_64.62%_70.87%_5.91%]"
                    data-node-id="1:1817"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup19}
                    />
                  </div>
                  <div
                    className="absolute inset-[12%_16.39%_73.19%_32.25%]"
                    data-node-id="1:1819"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup20}
                    />
                  </div>
                  <div
                    className="absolute inset-[25.74%_70.51%_19.89%_11.77%]"
                    data-node-id="1:1821"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup21}
                    />
                  </div>
                  <div
                    className="absolute inset-[12%_21.81%_73.19%_32.25%]"
                    data-node-id="1:1823"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup22}
                    />
                  </div>
                  <div
                    className="absolute inset-[63.62%_12.43%_11.7%_40.44%]"
                    data-node-id="1:1825"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup23}
                    />
                  </div>
                  <div
                    className="absolute inset-[52.45%_18.06%_27.75%_46.13%]"
                    data-node-id="1:1827"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup24}
                    />
                  </div>
                  <div
                    className="absolute inset-[59.22%_27.62%_30.93%_55.69%]"
                    data-node-id="1:1829"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup25}
                    />
                  </div>
                  <div
                    className="absolute inset-[45.3%_25.31%_44.42%_53.36%]"
                    data-node-id="1:1831"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup26}
                    />
                  </div>
                  <div
                    className="absolute inset-[63.66%_34.41%_10.11%_62.46%]"
                    data-node-id="1:1833"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup27}
                    />
                  </div>
                  <div
                    className="absolute inset-[82.99%_1.39%_9.67%_1.45%]"
                    data-node-id="1:1835"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup28}
                    />
                  </div>
                  <div
                    className="absolute inset-[23.68%_25.29%_67%_54.06%]"
                    data-node-id="1:1837"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup29}
                    />
                  </div>
                  <div
                    className="absolute inset-[29.88%_29.98%_61.92%_58.73%]"
                    data-node-id="1:1839"
                    data-name="Group"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgGroup30}
                    />
                  </div>
                </div>
              </div>
              <div
                className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#4a4a4a] text-[14px]"
                data-node-id="1:1841"
              >
                <p className="leading-[1.2]">
                  {factoryData[selectedFactory].distance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>)}
      <div
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-1/2 px-[180px] top-[2626.5px] w-[1920px]"
        data-node-id="1:1842"
        data-name="Frame"
      >
        <div
          className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1d] text-[40px] whitespace-nowrap"
          data-node-id="1:1843"
        >
          <p className="leading-[1.2]">{`CERTIFICATIONS & STANDARDS`}</p>
        </div>
        <div
          className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
          data-node-id="1:1844"
          data-name="Frame"
        >
          <CertificationMarquee direction="left" />
          <CertificationMarquee direction="right" />
        </div>
      </div>
    </div>
  )
}
