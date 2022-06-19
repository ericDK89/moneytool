import { useTransaction } from "../../hooks/useTransaction";
import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";

export function Tables() {

const {transactionList} = useTransaction()

  return (
    <>
      <TableDesktop />
      <TableMobile />
    </>
  );
}
