function getCardTypeText(type: string) {
    switch (type) {
        case 'NEIGHBOR_SERVICES_PROFILE':
            return 'NeighborServices™ Profile';
        case 'BUSINESS':
            return 'Business';
        case 'EVENT':
            return 'Event';
        case 'ARTICLE':
            return 'Article';
        case 'GROUP':
            return 'Group';
        default:
            return '';
    }
}

export default getCardTypeText;