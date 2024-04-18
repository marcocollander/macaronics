import Image from "next/image";
import perfect from "@/../public/perfect.jpg";

export default function PerfectBanner() {
  return (
    <div className="perfect-occasions">
      <div>
        <Image src={perfect} alt="perfect occasion" width={442} height={532} />
      </div>
      <div className="perfect-message">
        <p>Perfect for</p>
        <p>special occasion</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
          repellendus reiciendis tempora unde corrupti, est delectus, laudantium
          quae a voluptatibus quam natus quaerat! Optio quia assumenda alias
          deleniti neque?
        </p>
      </div>
    </div>
  );
}
