// Import Dependencies
import PropTypes from "prop-types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Button, Card } from "components/ui";

// ----------------------------------------------------------------------

export function FolderCard({ name, color, size, filesCount }) {
  return (
    <Card className="p-3 pt-4">
      <div className="flex items-start justify-between">
        <FolderIcon color={color} />
        <Button variant="flat" className="size-7 rounded-full" isIcon>
          <ArrowUpRightIcon className="size-4" />
        </Button>
      </div>
      <div
        className={`pt-5 text-base font-medium tracking-wide text-this dark:text-this-light this:${color}`}
      >
        {name}
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <p className="text-xs+ text-gray-400 dark:text-dark-300">
          {filesCount} files
        </p>
        <p className="font-medium text-gray-800 dark:text-dark-100">{size}</p>
      </div>
    </Card>
  );
}

function FolderIcon({ color }) {
  return (
    <svg
      className="w-14"
      viewBox="0 0 329 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M226.84 10.55C227.722 8.14137 229.313 6.05636 231.404 4.56946C233.494 3.08255 235.985 2.26346 238.55 2.22H318.6C319.983 2.16828 321.361 2.42074 322.636 2.95958C323.911 3.49841 325.052 4.3105 325.979 5.33852C326.906 6.36654 327.596 7.58544 328.001 8.90924C328.405 10.233 328.514 11.6295 328.32 13L307.64 186.51C307.201 189.464 305.726 192.165 303.478 194.131C301.23 196.097 298.356 197.199 295.37 197.24H41.37C39.9914 197.293 38.6181 197.042 37.3467 196.507C36.0753 195.971 34.9367 195.164 34.011 194.141C33.0854 193.118 32.3951 191.905 31.9889 190.586C31.5828 189.268 31.4705 187.876 31.66 186.51L49 40.73C49.4389 37.7762 50.9142 35.0748 53.1622 33.109C55.4101 31.1432 58.284 30.0412 61.27 30H199.49C205.479 29.8979 211.298 27.9852 216.179 24.5136C221.061 21.042 224.777 16.174 226.84 10.55V10.55Z"
        fill="#4F46E5"
        className={`fill-this dark:fill-this-light this:${color}`}
      />
      <path
        d="M226.84 10.55C227.722 8.14137 229.313 6.05636 231.404 4.56946C233.494 3.08255 235.985 2.26346 238.55 2.22H318.6C319.983 2.16828 321.361 2.42074 322.636 2.95958C323.911 3.49841 325.052 4.3105 325.979 5.33852C326.906 6.36654 327.596 7.58544 328.001 8.90924C328.405 10.233 328.514 11.6295 328.32 13L307.64 186.51C307.201 189.464 305.726 192.165 303.478 194.131C301.23 196.097 298.356 197.199 295.37 197.24H41.37C39.9914 197.293 38.6181 197.042 37.3467 196.507C36.0753 195.971 34.9367 195.164 34.011 194.141C33.0854 193.118 32.3951 191.905 31.9889 190.586C31.5828 189.268 31.4705 187.876 31.66 186.51L49 40.73C49.4389 37.7762 50.9142 35.0748 53.1622 33.109C55.4101 31.1432 58.284 30.0412 61.27 30H199.49C205.479 29.8979 211.298 27.9852 216.179 24.5136C221.061 21.042 224.777 16.174 226.84 10.55V10.55Z"
        fill="white"
        fillOpacity="0.15"
      />
      <path
        d="M36.23 189.25H301.64L316.76 10.67H51.36L36.23 189.25Z"
        fill="#F0F0F0"
      />
      <path
        d="M36.23 189.25H301.64L312.58 10.67H51.36L36.23 189.25Z"
        fill="#E0E0E0"
      />
      <path
        d="M36.23 189.25H301.64L310.76 5H45.36L36.23 189.25Z"
        fill="#F0F0F0"
      />
      <path
        d="M36.23 189.25H301.64L305.25 5H45.36L36.23 189.25Z"
        fill="#E0E0E0"
      />
      <path
        d="M36.23 189.25H301.64L303.22 0H37.82L36.23 189.25Z"
        fill="#F0F0F0"
      />
      <path
        d="M36.23 189.25H301.64L296.19 3.58H32.5L36.23 189.25Z"
        fill="#E0E0E0"
      />
      <path
        d="M36.23 189.25H301.64L293.76 5H28.36L36.23 189.25Z"
        fill="#F0F0F0"
      />
      <path
        d="M36.23 189.25H301.64L289.09 7.78H23.69L36.23 189.25Z"
        fill="#E0E0E0"
      />
      <path
        d="M36.23 189.25H301.64L287.09 9.33H21.69L36.23 189.25Z"
        fill="#F0F0F0"
      />
      <path
        d="M169.14 21.82C169.155 20.6597 169.403 19.5143 169.87 18.4519C170.336 17.3896 171.012 16.4319 171.856 15.6361C172.701 14.8402 173.697 14.2223 174.785 13.8193C175.873 13.4163 177.031 13.2362 178.19 13.29H258.24C261.339 13.409 264.311 14.5538 266.69 16.5447C269.068 18.5356 270.718 21.2599 271.38 24.29L303.01 186.29C304.19 192.36 300.23 197.29 294.16 197.29H40.16C34.08 197.29 28.16 192.36 27.01 186.29L0.920009 52.74C-0.259991 46.67 3.70001 41.74 9.77001 41.74H148C160 41.74 168.73 33.48 169.14 21.82Z"
        className={`fill-this dark:fill-this-light this:${color}`}
      />
    </svg>
  );
}

FolderCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  filesCount: PropTypes.string,
};

FolderIcon.propTypes = {
  color: PropTypes.string,
};
