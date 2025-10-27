import * as React from 'react';
import Link from 'next/link';
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './ui/text';
import { categoriesData, quickLinksData } from '@/constants/data';
import FooterBottom from './FooterBottom';
import { Input } from './ui/input';
import { Button } from './ui/button';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia />
          </div>
          <div>
            <SubTitle className="mb-4">Quick Links</SubTitle>
            <ul className="space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    className="text-gray-400 hover:text-shop-dark-green text-sm font-medium hoverEffect"
                    href={item?.href}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="mb-4">Categories</SubTitle>
            <ul className="space-y-3">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    className="text-gray-400 hover:text-shop-dark-green text-sm font-medium hoverEffect"
                    href={'/category/' + item?.href}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="mb-4">Newsletter</SubTitle>
            <SubText className="mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </SubText>
            <form className="space-y-2">
              <Input
                type="email"
                id="subscribe"
                placeholder="Enter your email"
                required
              />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}

export default Footer;
