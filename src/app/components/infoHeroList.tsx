export default function InfoList() {
  return (
    <ul
      className="
              flex gap-4 justify-evenly font-semibold text-[10px] sm:text-base lg:text-lg
              bg-[#3A7BD5] text-white
              absolute bottom-0 left-0 w-full py-2
              sm:static sm:bg-transparent sm:text-[#3A7BD5] sm:py-0
            "
    >
      <li className="hover:underline cursor-pointer">#UI/UX Design</li>
      <li className="hover:underline cursor-pointer">#Front-end</li>
      <li className="hover:underline cursor-pointer">#Back-end</li>
      <li className="hover:underline cursor-pointer">#CS Students</li>
    </ul>
  );
}
