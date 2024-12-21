import Card from "@/components/Card/Card";
import CustomList from "@/components/CustomList/CustomList";
import styles from "./PlatformCard.module.css";

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
        <div className={styles.platforms}>
          {platforms.map((platform) => (
            <div key={platform.name} className={styles.platform}>
              <div className={styles.platformTitle}>{platform.name}</div>
              <div className={styles.platformBody}>
                {platform.data && <CustomList items={platform.data} />}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};