export interface Member {
    Role: string;
    Name: string;
    "LinkedIn ID"?: string;
    "Insta ID"?: string;
    Github?: string;
    Photo?: string;
}

export interface MemberGroups {
    [key: string]: Member[];
}

export interface PastEvent {
    title: string;
    description: string;
    image: string;
    date: string;
    type: string;
    faculty: string;
}
