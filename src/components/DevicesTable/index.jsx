import styles from "./DevicesTable.module.scss";

export const DevicesTable = ({ data = {} }) => {
  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Devices</th>
            <th>MAC Address</th>
            <th>IP</th>
            <th>Created Date</th>
            <th>Power Consumption</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.listDevices.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.Devices}</td>
                <td>{item.MAC_Address}</td>
                <td>{item.IP}</td>
                <td>{item.Created_Date}</td>
                <td>{item.Power_Consumption}</td>
                <td>action</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{data.totalPowerConsumption}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
