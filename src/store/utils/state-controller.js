import store from "../index";
import { getInitialState as userManagement } from "../user-management.module"

const initialStateCopy = JSON.parse(JSON.stringify(
  {
    userManagement: userManagement()
  }));

export function resetState () {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)));
}
