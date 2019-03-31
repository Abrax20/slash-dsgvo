import { socket } from "../../App/App";

export const saveContact = data => {
  socket.emit('OPEN_SIGNATURE_SCREEN', data);
};
