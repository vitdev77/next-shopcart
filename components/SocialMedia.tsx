import * as React from 'react';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSlack,
  IconBrandYoutube,
} from '@tabler/icons-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';

const socialLink = [
  {
    title: 'YouTube',
    href: 'https://youtu.be/KRvyoNRnBfA?si=XEOxCFtGaCS7LuSP',
    icon: <IconBrandYoutube className="size-5" />,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/vitdev77/next-shopcart',
    icon: <IconBrandGithub className="size-5" />,
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <IconBrandLinkedin className="size-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: <IconBrandFacebook className="size-5" />,
  },
  {
    title: 'Slack',
    href: 'https://slack.com',
    icon: <IconBrandSlack className="size-5" />,
  },
];

const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2.5">
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target={'_blank'}
                rel={'noopener noreferrer'}
                className="p-2.5 flex items-center justify-center rounded-full bg-gray-400/10 hover:text-shop-light-green hoverEffect"
                href={item?.href}
                title={item?.title}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
