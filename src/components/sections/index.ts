// Section components for service, industry, location and standalone pages.
// Available in any .mdx file alongside the blog blocks, without importing.
import Section from "./Section.astro";
import ItemList from "./ItemList.astro";
import PlanCards from "./PlanCards.astro";
import Signposts from "./Signposts.astro";
import ServiceTiles from "./ServiceTiles.astro";
import Process from "./Process.astro";
import Reasons from "./Reasons.astro";
import ContactForm from "./ContactForm.astro";
import SolicitorAuditForm from "../campaigns/SolicitorAuditForm.astro";
import PersonalizedHeading from "../campaigns/PersonalizedHeading.astro";
import { blocks } from "../blocks";

export const sections = {
  Section, ItemList, PlanCards, Signposts, ServiceTiles, Process, Reasons, ContactForm,
  SolicitorAuditForm, PersonalizedHeading,
};
export const allComponents = { ...blocks, ...sections };
