import { v4 as uuidv4 } from "uuid";
import AnyChart from "anychart-react";
import { useEffect, useState } from "react";

import { DevicesTable, Header, Sidebar } from "../../components";
import styles from "./Dashboard.module.scss";
import { AddFormModule } from "../../modules";

export const Dashboard = () => {
  const [dataTable, setDataTable] = useState({
    listDevices: [
      {
        ID: 1,
        Devices: "TV",
        MAC_Address: "00:18:44:11:3A:B7",
        IP: "127.0.0.2",
        Created_Date: "2021-05-31",
        Power_Consumption: 50,
      },
      {
        ID: 2,
        Devices: "Washer",
        MAC_Address: "00:18:44:11:3A:B8",
        IP: "127.0.0.3",
        Created_Date: "2021-05-31",
        Power_Consumption: 60,
      },
      {
        ID: 3,
        Devices: "Refrigerator",
        MAC_Address: "00:18:44:11:3A:B9",
        IP: "127.0.0.4",
        Created_Date: "2021-05-31",
        Power_Consumption: 80,
      },
      {
        ID: 4,
        Devices: "Selling Fan",
        MAC_Address: "00:18:44:11:3A:B2",
        IP: "127.0.0.5",
        Created_Date: "2021-05-31",
        Power_Consumption: 100,
      },
    ],
    totalPowerConsumption: 290,
  });
  const [dataChart, setDataChart] = useState([]);

  const sidebarModel = [
    {
      id: uuidv4(),
      icon: "images/dashboard.png",
      title: "Dashboard",
    },
    {
      id: uuidv4(),
      icon: "images/logs.png",
      title: "Logs",
    },
    {
      id: uuidv4(),
      icon: "images/setting.jpg",
      title: "Settings",
    },
  ];

  useEffect(() => {
    const _dataChart = [];
    dataTable.listDevices.forEach((item) => {
      const index = _dataChart.findIndex((_item) => {
        return _item.x === item.Devices;
      });

      if (index !== -1) {
        _dataChart[index].value += Number(item.Power_Consumption);
      } else {
        _dataChart.push({
          x: item.Devices,
          value: item.Power_Consumption,
        });
      }
    });
    setDataChart(_dataChart);
  }, [dataTable]);

  const handleAddDevice = (newDevice) => {
    const newListDevices = [...dataTable.listDevices, newDevice];
    let sum = 0;
    newListDevices.forEach((item) => {
      console.log(Number(item.Power_Consumption), sum);
      sum += Number(item.Power_Consumption);
    });
    const newTotalPowerConsumption = sum;
    setDataTable({
      listDevices: newListDevices,
      totalPowerConsumption: newTotalPowerConsumption,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar sidebarModel={sidebarModel} />
      </div>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <DevicesTable data={dataTable} />

          <div className={styles.bottom}>
            <div className={styles.chart}>
              <AnyChart
                type="pie"
                innerRadius="50%"
                data={dataChart}
                title="Power Consumption"
                height={250}
              />
            </div>
            <div className={styles.addForm}>
              <AddFormModule
                numberOfDevices={dataTable.listDevices.length}
                onAddDevice={handleAddDevice}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
