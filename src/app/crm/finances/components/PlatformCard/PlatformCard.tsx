import Card from "@/components/Card/Card";
import CustomList from "@/components/CustomList/CustomList";

interface Platform {
  name: string;
  data?: Array<{ name: number }>;
}

const platforms: Platform[] = [
  { name: "Donatello", data: [{ name: 1000 }, { name: 500 }, { name: 2000 }] },
  { name: "Patreon" },
  { name: "Youtube" },
  { name: "Twitch" }
];

export const PlatformCard = () => {
  return (
    <Card
      title="Donuts from Subscribers"
      body={
        <div className="grid gap-3">
          {platforms.map((platform) => (
            <div key={platform.name} className="rounded-2large p-3 ">
              <div className="mb-2 font-black text-sm">{platform.name}</div>
              <div>
                {platform.data && <CustomList items={platform.data} />}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};