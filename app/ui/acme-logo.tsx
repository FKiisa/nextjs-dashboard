import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { FLusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${FLusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
