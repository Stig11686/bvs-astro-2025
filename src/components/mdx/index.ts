// Components you can use inside .mdx content. Old theme names are kept as
// aliases so existing content works unchanged.
import Cards from "./Cards.astro";
import Card from "./Card.astro";
import Quote from "./Quote.astro";
import Button from "./MdxButton.astro";
import Accordion from "./Accordion.astro";
import Notice from "./Notice.astro";
import Image from "./MdxImage.astro";
import CallToAction from "./InlineCta.astro";
import PersonalizedHeading from "./PersonalizedHeading.astro";
import AuditRequestForm from "./AuditRequestForm.astro";

export const mdxComponents = {
  Cards,
  Card,
  Quote,
  Button,
  Accordion,
  Notice,
  Image,
  CallToAction,
  PersonalizedHeading,
  AuditRequestForm,
  // Old names
  CardWrapper: Cards,
  TestimonialArticle: Quote,
  CustomButton: Button,
  OptimizedImage: Image,
  SolicitorAuditForm: AuditRequestForm,
};
