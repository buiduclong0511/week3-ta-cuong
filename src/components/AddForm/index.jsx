import styles from "./AddForm.module.scss";
import { InputField, Button } from "../../components";

export const AddForm = ({ values = {}, onChangeValues, onAddDevices }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <InputField
          value={values.devices}
          placeholder="devices"
          name="devices"
          onChange={onChangeValues}
        />
      </div>
      <div className={styles.input}>
        <InputField
          value={values.macAddress}
          placeholder="macAddress"
          name="macAddress"
          onChange={onChangeValues}
        />
      </div>
      <div className={styles.input}>
        <InputField
          value={values.ip}
          placeholder="ip"
          name="ip"
          onChange={onChangeValues}
        />
      </div>
      <div className={styles.input}>
        <InputField
          value={values.powerConsumption}
          placeholder="powerConsumption"
          name="powerConsumption"
          onChange={onChangeValues}
        />
      </div>
      <Button onClick={onAddDevices}>ADD DEVICES</Button>
    </div>
  );
};
