import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const quickActions = [
  {
    title: "Search\nproperties",
    icon: "/home-icon-1.png",
    iconClassName: "h-[62px] w-[62px]",
  },
  {
    title: "Map\nView",
    icon: "/blue-location-pin-image-5.png",
    iconClassName: "h-[42px] w-[42px]",
  },
  {
    title: "Saved\nProperties",
    icon: "/purple-heart-icon-1.png",
    iconClassName: "h-11 w-[66px]",
  },
  {
    title: "Messages",
    icon: "/free-yellow-chat-message-speech-bubble-icon-17493-thumb-1.png",
    iconClassName: "h-11 w-11",
  },
];

const properties = [
  {
    title: "KWTU Bedsitters",
    location: "South B, Nairobi",
    price: "Ksh 10,000/month",
    image: "/image-8.png",
    favorite: "/image-4.png",
    amenities: ["Wi-Fi", "Water"],
  },
  {
    title: "JR Appartments",
    location: "Jogoo Rd, Nairobi",
    price: "Ksh 9,000/month",
    image: "/image-9.png",
    favorite: "/image-6.png",
    amenities: ["Wi-Fi", "Water"],
  },
  {
    title: "ADADA Flats",
    location: "Upperhill, Nairobi",
    price: "Ksh 17,000/month",
    image: "/image-10.png",
    favorite: "/image-6.png",
    amenities: ["Wi-Fi", "Water"],
  },
  {
    title: "Campus View",
    location: "Nairobi West, Nbo",
    price: "Ksh 19,000/month",
    image: "/image-11.png",
    favorite: "/image-6.png",
    amenities: ["Wi-Fi", "Water"],
  },
];

const bottomNavItems = [
  {
    label: "Home",
    icon: "/image-removebg-preview-1.png",
    iconClassName: "h-[38px] w-[65px]",
    active: true,
  },
  {
    label: "Search",
    icon: "/search-icon-5.png",
    iconClassName: "h-[46px] w-[55px]",
    active: false,
  },
  {
    label: "Saved",
    icon: "/heart-icon-5.png",
    iconClassName: "h-[50px] w-[50px]",
    active: false,
  },
  {
    label: "Messages",
    icon: "/messages-icon-removebg-preview-1.png",
    iconClassName: "h-[50px] w-[50px]",
    active: false,
  },
  {
    label: "Profile",
    icon: "/profile-icon-2.png",
    iconClassName: "h-[50px] w-[50px]",
    active: false,
  },
];

export const StudentDashboardOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-transparent">
<div className="mx-auto w-full max-w-[410px]">
<Card className="overflow-hidden rounded-[10px] border-[10px] border-black bg-white shadow-none">
<CardContent className="p-0">
<div className="flex min-h-[844px] flex-col bg-white">
<header className="flex flex-col">
<div className="flex items-center justify-between px-[19px] pt-[11px]">
<div className="text-center [font-family:'Inter',Helvetica] text-lg font-extrabold leading-[normal] tracking-[0] text-black">
9:40
                  </div>
<div className="flex items-center gap-[3px]">
<img
                      className="h-[30px] w-[30px] object-cover"
                      alt="Network bars photo"
                      src="/network-bars-photo-5-1.png"
                    />
<img
                      className="h-[25px] w-[25px] object-cover"
                      alt="Wifi photo"
                      src="/wifi-photo-6-1.png"
                    />
<img
                      className="h-[25px] w-[25px] object-cover"
                      alt="Phone battery photo"
                      src="/phone-battery-photo-5-1.png"
                    />
</div>
</div>
<div className="flex items-center justify-between px-4 pb-1 pt-[10px]">
<div className="flex flex-col gap-[9px]">
<img
                      className="h-px w-10"
                      alt="Line"
                      src="/line-5.svg"
                    />
<img
                      className="h-px w-10"
                      alt="Line"
                      src="/line-5.svg"
                    />
<img
                      className="h-px w-10"
                      alt="Line"
                      src="/line-5.svg"
                    />
</div>
<div className="[font-family:'Inter',Helvetica] text-center text-lg font-medium leading-[normal] tracking-[0] text-black">
SMARTKEJA
                  </div>
<div className="flex items-center gap-[3px]">
<img
                      className="h-[50px] w-[50px] object-cover"
                      alt="Notification bell"
                      src="/notification-bell-3.png"
                    />
<img
                      className="h-[38px] w-[25px] rounded-[100px] border border-black object-cover"
                      alt="Whatsapp image"
                      src="/whatsapp-image-2026-05-19-at-00-28-12--1.png"
                    />
</div>
</div>
<Separator className="h-px w-full bg-black" />
</header>
<main className="flex-1 px-[14px] pb-2 pt-[18px]">
<section aria-label="Greeting" className="mb-4">
<h1 className="[font-family:'Inter',Helvetica] text-lg font-bold leading-[normal] tracking-[0] text-black">
Hello, Ephraim 👋
                  </h1>
<p className="[font-family:'Inter',Helvetica] text-sm font-medium leading-[normal] tracking-[0] text-black">
Find your next student home
                  </p>
</section>
<section aria-label="Search" className="mb-6">
<div className="relative">
<Input
                      defaultValue="Search for houses, areas or landlords..."
                      readOnly
                      className="h-10 rounded-[10px] border border-black bg-white pr-14 text-left [font-family:'Inter',Helvetica] text-sm font-light leading-[normal] tracking-[0] text-black placeholder:text-black"
                    />
<img
                      className="pointer-events-none absolute right-[-8px] top-1/2 h-[46px] w-[55px] -translate-y-1/2 object-cover"
                      alt="Search icon"
                      src="/search-icon-5.png"
                    />
</div>
</section>
<section aria-label="Quick Actions" className="mb-5">
<h2 className="mb-4 [font-family:'Inter',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-black">
Quick Actions
                  </h2>
<div className="grid grid-cols-4 gap-[10px]">
{quickActions.map((action) => (
                      <Button
                        key={action.title}
                        variant="ghost"
                        className="h-auto rounded-[10px] border border-black bg-white p-2 hover:bg-white"
                      >
<div className="flex flex-col items-center justify-start">
<img
                            className={`${action.iconClassName} object-cover`}
                            alt={action.title}
                            src={action.icon}
                          />
<span className="mt-[2px] whitespace-pre-line text-center [font-family:'Inter',Helvetica] text-[10px] font-normal leading-[normal] tracking-[0] text-black">
{action.title}
                          </span>
</div>
</Button>
))}
                  </div>
</section>
<section aria-label="Nearby Properties">
<div className="mb-3 flex items-center justify-between">
<h2 className="[font-family:'Inter',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-black">
Nearby Properties
                    </h2>
<Button
                      variant="ghost"
                      className="h-auto p-0 [font-family:'Inter',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-[#0600ba] hover:bg-transparent hover:text-[#0600ba]"
                    >
View all
                    </Button>
</div>
<div className="grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
{properties.map((property) => (
                      <Card
                        key={property.title}
                        className="rounded-[10px] border border-black bg-white shadow-none"
                      >
<CardContent className="p-0">
<div className="overflow-hidden rounded-t-[10px]">
<div className="relative">
<img
                                className="h-[82px] w-full object-cover"
                                alt={property.title}
                                src={property.image}
                              />
<img
                                className="absolute right-[8px] top-[2px] h-[34px] w-[34px] object-cover"
                                alt="Favorite"
                                src={property.favorite}
                              />
</div>
<img
                              className="h-0.5 w-full"
                              alt="Line"
                              src="/line-10.svg"
                            />
</div>
<div className="px-[8px] pb-2 pt-[4px]">
<h3 className="whitespace-nowrap [font-family:'Inter',Helvetica] text-[15px] font-bold leading-[normal] tracking-[0] text-black">
{property.title}
                            </h3>
<p className="whitespace-nowrap [font-family:'Inter',Helvetica] text-[11px] font-light leading-[normal] tracking-[0] text-black">
{property.location}
                            </p>
<p className="whitespace-nowrap [font-family:'Inter',Helvetica] text-[11px] font-medium leading-[normal] tracking-[0] text-black">
{property.price}
                            </p>
<div className="mt-[6px] flex gap-[9px]">
{property.amenities.map((amenity) => (
                                <div
                                  key={`${property.title}-${amenity}`}
                                  className="flex h-[23px] w-[55px] items-center justify-center rounded-[5px] border border-black bg-white"
                                >
<span className="[font-family:'Inter',Helvetica] text-[11px] font-medium leading-[normal] tracking-[0] text-black">
{amenity}
                                  </span>
</div>
))}
                            </div>
</div>
</CardContent>
</Card>
))}
                  </div>
</section>
</main>
<footer className="mt-auto">
<Separator className="h-px w-full bg-black" />
<nav
                  aria-label="Bottom navigation"
                  className="grid grid-cols-5 items-end px-[5px] pb-[8px] pt-[2px]"
                >
{bottomNavItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="h-auto flex-col gap-0 p-0 hover:bg-transparent"
                    >
<img
                        className={`${item.iconClassName} object-cover`}
                        alt={item.label}
                        src={item.icon}
                      />
<span
                        className={`-mt-[2px] text-center [font-family:'Inter',Helvetica] text-[10px] leading-[normal] tracking-[0] ${
                          item.active
                            ? "font-extrabold text-[#0600ba]"
                            : "font-medium text-black"
                        }`}
                      >
{item.label}
                      </span>
</Button>
))}
                </nav>
</footer>
</div>
</CardContent>
</Card>
</div>
</section>
);
};