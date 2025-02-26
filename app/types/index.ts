export interface Post {
    id: string;
    title: string;
    description: string;
    img_url: string;
    user_id: string;
    audio_url: string;
    image_url: string;
    mp3_url: string;
    m3u8_url: string | null;
    text: string;
    created_at: string;
    trackname: string;
    price: number;
    updated_at: string;
    genre: string;
    type: string;
    name: string;
    // Add other properties as needed
}

export interface PostWithProfile extends Post {
    m3u8_url: string | null;
    updated_at: string; // Add any additional properties
    type: string;
    name: string;
    image: string;
}

export interface Purchase {
    $id: string;
    user_id: string;
    track_id: string;
    author_id: string;
    purchase_date: string;
    amount: number;
    // Add other properties as needed
}

export interface RoyaltyTransaction {
    author_id: string;
    track_id: string;
    amount: number;
    transaction_date: string;
    purchase_id: string;
    status: string;
    // Add other properties as needed
} 