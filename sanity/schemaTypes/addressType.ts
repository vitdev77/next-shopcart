import { defineType, defineField } from 'sanity';
import { IconHome } from '@tabler/icons-react';

export const addressType = defineType({
  name: 'address',
  title: 'Address',
  type: 'document',
  icon: IconHome,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
