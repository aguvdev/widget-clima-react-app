import styles from "./weatherMainInfo.module.css";
import { WiHumidity, WiStrongWind, WiFog } from "react-icons/wi";

export default function WeatherMainInfo({ weather }) {
  return (
    <>
      <div className={styles.mainInfo}>
        <div className={styles.current}>
          {/* NOMBRE CIUDAD */}
          <div className={styles.city}>{weather?.location.name}</div>
          {/* NOMBRE PAÍS */}
          <div className={styles.country}>{weather?.location.country}</div>
          {/* ROW */}
          <div className={styles.row}>
            {/* ICONO */}
            <div>
              <img
                src={`http://${weather?.current.condition.icon}`}
                width="128px"
                alt={`${weather?.current.condition.text}`}
              />
            </div>
            {/* INFO */}
            <div className={styles.city}>
              <div className={styles.condition}>
                {weather?.current.condition.text}
              </div>
              <div className={styles.current}>{weather?.current.temp_c}º</div>
            </div>
          </div>
          {/* MORE */}
          <div className={styles.more}>
            {/* ITEM 1 */}
            <div className={styles.item}>
                <WiHumidity />
              <div className={styles.text}>
                <div className={styles.value}>{weather?.current.humidity}%</div>
                <div className={styles.type}>Humidity</div>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className={styles.item}>
                <WiStrongWind />
              <div className={styles.text}>
                <div className={styles.value}>{weather?.current.wind_kph}hm/h</div>
                <div className={styles.type}>Wind</div>
              </div>
            </div>
            {/* ITEM 3 */}
            <div className={styles.item}>
                <WiFog />
              <div className={styles.text}>
                <div className={styles.value}>{weather?.current.vis_miles}%</div>
                <div className={styles.type}>Visibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
