type ContentType = {
    id: string;
    label: string;
};

const contentTypes: ContentType[] = [
    { id: 'group', label: 'Group' },
    { id: 'event', label: 'Event' },
    { id: 'business', label: 'Business' },
    { id: 'organization', label: 'Organization' },
    { id: 'neighborservice', label: 'NeighborServices Profile' },
];

export default contentTypes;