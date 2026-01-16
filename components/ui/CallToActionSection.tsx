"use client";
import {FaArrowDown, FaCalendarAlt} from "react-icons/fa";
import Button from "../common/Button";

const CallToActionSection = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button
        title="Prendre un rendez-vous"
        icon={<FaCalendarAlt />}
        onClick={() => {}}
      />
      <Button
        variant="secondary"
        title="Découvrir nos projets "
        iconPosition="after"
        icon={<FaArrowDown />}
      />
    </div>
  );
};
export default CallToActionSection;
