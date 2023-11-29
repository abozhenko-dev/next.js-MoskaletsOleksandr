import { FC } from "react";

import { Modal } from "@components/common";

interface TestModalProps {
  onClose?: () => void;
  isVisible: boolean;
}

export const TestModal: FC<TestModalProps> = (props) => {
  const { onClose, isVisible } = props;

  return (
    <Modal onClose={onClose} isVisible={isVisible}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        provident quas non doloribus. Illum consequatur quos recusandae corporis
        nisi voluptatum modi voluptatibus iusto cum numquam id tempora tenetur
        ea, sint animi necessitatibus soluta accusantium minus praesentium
        voluptatem quo expedita temporibus labore? Neque ut excepturi deleniti
        laboriosam minima tenetur, quasi, eveniet, quis tempora animi explicabo!
        Fugiat, enim nulla! Excepturi magni alias odio explicabo. Tempora quos
        error suscipit, maiores, nam ullam corporis quisquam officiis facilis,
        tenetur consequatur molestias quasi voluptatibus labore! Voluptas
        consequuntur sapiente ut eaque odio laudantium cumque consectetur amet
        excepturi debitis. Exercitationem consequatur cum, deleniti iusto natus
        dolores earum laborum.
      </p>
    </Modal>
  );
};
