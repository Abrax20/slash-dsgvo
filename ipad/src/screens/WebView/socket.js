import { socket } from "../../App/App";

export const setupSocket = navigation => {
  socket.on('OPEN_SIGNATURE_SCREEN', () => {
    navigation.navigate('Submission');
  });
};
