import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const summaryCards = [
  {
    value: "Ksh 250,000",
    label: "Total Expected",
    valueClassName: "text-[#1eee6e]",
  },
  {
    value: "Ksh 168,000",
    label: "Total Received",
    valueClassName: "text-[#002efe]",
  },
  {
    value: "Ksh 82,000",
    label: "Total Outstanding",
    valueClassName: "text-[#f69c00]",
    span: "md:col-span-2",
    centered: true,
  },
];

const filters = [
  {
    label: "All Properties",
    icon: "/1123247-200-4.png",
    alt: "Element",
  },
  {
    label: "June 2026",
    icon: "/images-1.png",
    alt: "Images",
  },
];

const rentRows = [
  {
    tenant: ["Joner", "Ashuma"],
    property: ["KWTU", "2A"],
    dueDate: ["15/06/", "2026"],
    amount: "10,000",
    status: "Paid",
    statusClassName: "bg-[#b3f0ca] text-black text-base",
  },
  {
    tenant: ["Jerry", "Madoya"],
    property: ["JR", "5B"],
    dueDate: ["15/06/", "2026"],
    amount: "9,000",
    status: "Paid",
    statusClassName: "bg-[#b3f0ca] text-black text-base",
  },
  {
    tenant: ["Fidel", "Odera"],
    property: ["Campus", "View 3A"],
    dueDate: ["15/06/", "2026"],
    amount: "19,000",
    status: "Pending",
    statusClassName: "bg-[#fdeaab] text-black text-[10px]",
  },
  {
    tenant: ["Samuel", "Kamanda"],
    property: ["ADADA", "Flats 1C"],
    dueDate: ["15/06/", "2026"],
    amount: "17,000",
    status: "Overdue",
    statusClassName: "bg-[#ffbebe] text-[#a10000] text-[10px]",
  },
];

export const RentTrackingDashboardSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <p className="mb-4 text-sm text-black">
        The highlighted section shows a mobile rent tracking dashboard with a
        green app header, three summary cards, two filter controls, a rent
        status table, and a bottom outlined action button for recording payment.
      </p>
      <Card className="mx-auto w-full max-w-[410px] overflow-hidden rounded-[10px] border-[10px] border-black bg-white shadow-none">
        <CardContent className="p-0">
          <header className="rounded-t-[10px] bg-[#1eee6e] px-[14px] pb-3 pt-1">
            <div className="flex items-start justify-between">
              <div className="font-extrabold text-[18px] leading-none text-black [font-family:'Inter',Helvetica]">
                9:40
              </div>
              <div className="flex items-start gap-[3px]">
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
            <div className="mt-1 flex items-center justify-between">
              <img className="h-[41px] w-14" alt="Frame" src="/frame-6.svg" />
              <h1 className="[font-family:'Inter',Helvetica] text-center text-[22px] font-extrabold leading-none text-black">
                SMARTKEJA
              </h1>
              <div className="flex items-center">
                <img
                  className="-mr-3 h-[76px] w-[76px] object-cover"
                  alt="Notification bell"
                  src="/notification-bell-3.png"
                />
                <img
                  className="h-[60px] w-[60px] object-cover"
                  alt="Image removebg"
                  src="/image-removebg-preview--14--2.png"
                />
              </div>
            </div>
          </header>
          <div className="px-[18px] pb-[18px] pt-[13px]">
            <div>
              <h2 className="[font-family:'Inter',Helvetica] text-[22px] font-extrabold leading-none text-black">
                Rent Tracking
              </h2>
              <p className="mt-4 [font-family:'Inter',Helvetica] text-base font-normal leading-none text-black">
                Track rent payments and balances
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-[19px] gap-y-2">
              {summaryCards.map((card) => (
                <Card
                  key={card.label}
                  className={`rounded-[10px] border border-black bg-white shadow-none ${card.span ?? ""} ${card.centered ? "mx-auto w-full max-w-40" : ""}`}
                >
                  <CardContent className="flex h-[81px] flex-col items-center justify-center p-2">
                    <div
                      className={`[font-family:'Inter',Helvetica] text-center text-[22px] font-black leading-none ${card.valueClassName}`}
                    >
                      {card.value}
                    </div>
                    <div className="mt-4 [font-family:'Inter',Helvetica] text-center text-base font-normal leading-none text-black">
                      {card.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between gap-[18px]">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  type="button"
                  className="flex h-[42px] w-full items-center justify-between rounded-[10px] border border-black bg-white px-[7px] text-left"
                >
                  <span className="[font-family:'Inter',Helvetica] text-base font-normal leading-none text-black">
                    {filter.label}
                  </span>
                  <img
                    className="h-10 w-10 object-cover"
                    alt={filter.alt}
                    src={filter.icon}
                  />
                </button>
              ))}
            </div>
            <div className="mt-[18px]">
              <div className="grid grid-cols-[1.1fr_1fr_1fr_0.8fr_0.9fr] items-center gap-0">
                <div className="[font-family:'Inter',Helvetica] text-center text-base font-bold leading-none text-black">
                  Tenant
                </div>
                <div className="[font-family:'Inter',Helvetica] text-center text-base font-bold leading-none text-black">
                  Property
                </div>
                <div className="[font-family:'Inter',Helvetica] text-center text-base font-bold leading-none text-black">
                  Due Date
                </div>
                <div className="[font-family:'Inter',Helvetica] text-center text-base font-bold leading-none text-black">
                  Amount
                </div>
                <div className="[font-family:'Inter',Helvetica] text-center text-base font-bold leading-none text-black">
                  Status
                </div>
              </div>
              <Separator className="mt-3 bg-black" />
              <div className="divide-y divide-black">
                {rentRows.map((row) => (
                  <div
                    key={`${row.tenant.join(" ")}-${row.property.join(" ")}`}
                    className="grid grid-cols-[1.1fr_1fr_1fr_0.8fr_0.9fr] items-center py-2"
                  >
                    <div className="[font-family:'Inter',Helvetica] text-center text-base font-medium leading-none text-black">
                      {row.tenant[0]}
                      <br />
                      {row.tenant[1]}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-center text-base font-medium leading-none text-black">
                      {row.property[0]}
                      <br />
                      {row.property[1]}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-center text-base font-medium leading-none text-black">
                      {row.dueDate[0]}
                      <br />
                      {row.dueDate[1]}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-center text-base font-medium leading-none text-black">
                      {row.amount}
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={`flex h-[42px] w-[46px] items-center justify-center rounded-[5px] border border-black [font-family:'Inter',Helvetica] font-medium leading-none ${row.statusClassName}`}
                      >
                        {row.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="mt-2 bg-black" />
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                type="button"
                variant="outline"
                className="h-auto w-full max-w-[346px] rounded-[5px] border border-[#1eee6e] bg-white px-4 py-[7px] text-xl font-normal text-[#1eee6e] shadow-none hover:bg-white hover:text-[#1eee6e]"
              >
                <img
                  className="mr-2 h-[31px] w-[31px] object-cover"
                  alt="Plus"
                  src="/plus-1.png"
                />
                <span className="[font-family:'Inter',Helvetica]">
                  Record Payment
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
