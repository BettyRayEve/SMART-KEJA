import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const statusIcons = [
  {
    alt: "Network bars photo",
    src: "/network-bars-photo-5-1.png",
    className: "h-[18px] w-[18px] object-contain",
  },
  {
    alt: "Wifi photo",
    src: "/wifi-photo-6-1.png",
    className: "h-[18px] w-[18px] object-contain",
  },
  {
    alt: "Phone battery photo",
    src: "/phone-battery-photo-5-1.png",
    className: "h-[18px] w-[18px] object-contain",
  },
];

const roleButtons = [
  {
    label: "I&apos;m a Student",
    variant: "student" as const,
  },
  {
    label: "I&apos;m a Landlord",
    variant: "landlord" as const,
  },
];

export const RoleSelectionSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex w-full justify-start">
        <Card className="w-full max-w-[410px] overflow-hidden rounded-[10px] border-[10px] border-black bg-[#e7e7e7] shadow-none">
          <CardContent className="flex min-h-[864px] flex-col p-0">
            <header className="flex items-start justify-between px-[19px] pt-[11px]">
              <time className="[font-family:'Inter',Helvetica] text-lg font-extrabold leading-none text-black">
                9:40
              </time>
              <div className="flex items-center gap-[3px] pt-[1px]">
                {statusIcons.map((icon) => (
                  <img
                    key={icon.alt}
                    className={icon.className}
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </div>
            </header>
            <main className="flex flex-1 flex-col items-center px-[21px] pb-8 pt-[132px] text-center">
              <h1 className="[font-family:'Inter',Helvetica] text-[50px] font-bold leading-none tracking-[0] text-[#4f6df5]">
                <span className="text-[#4f6df5]">SMART</span>
                <span className="text-[#34b56f]">KEJA</span>
              </h1>
              <h2 className="mt-[8px] [font-family:'Inter',Helvetica] text-[22px] font-bold leading-[1.15] tracking-[0] text-black">
                Find Verified Student
                <br />
                Accommodation Near Campus
              </h2>
              <p className="mt-[10px] [font-family:'Inter',Helvetica] text-[14px] font-medium leading-[1.25] tracking-[0] text-black">
                Connect with landlords and
                <br />
                find the perfect place to stay
              </p>
              <img
                className="mt-[22px] h-[220px] w-[330px] max-w-full object-contain"
                alt="House cartoon photo"
                src="/house-cartoon-photo-1.png"
              />
              <div className="mt-[8px] flex w-full flex-col gap-5">
                {roleButtons.map((button) => {
                  const isStudent = button.variant === "student";
                  const intendedRole = isStudent ? "student" : "landlord";

                  return (
                    <Button
                      key={button.label}
                      type="button"
                      onClick={() =>
                        navigate("/login", {
                          state: { intendedRole },
                        })
                      }
                      className={
                        isStudent
                          ? "h-auto min-h-[60px] w-full rounded-[10px] bg-[#0600ba] px-6 py-4 [font-family:'Inter',Helvetica] text-lg font-medium text-white hover:bg-[#0600ba]/90"
                          : "h-auto min-h-[60px] w-full rounded-[10px] border-[3px] border-[#1eee6e] bg-[#d9d9d9] px-6 py-4 [font-family:'Inter',Helvetica] text-lg font-medium text-[#3fc17b] hover:bg-[#d9d9d9]"
                      }
                      variant="default"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: button.label }}
                      />
                    </Button>
                  );
                })}
              </div>
              <p className="mt-[10px] [font-family:'Inter',Helvetica] text-[15px] font-medium leading-none tracking-[0] text-black">
                Find. Connect. Stay.
              </p>
              <img
                className="mt-[8px] h-3.5 w-48 object-contain"
                alt="Group"
                src="/group-1.png"
              />
            </main>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
