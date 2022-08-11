import {Emote} from "./Emote";
import {TId} from "./TId";

export interface MessageRequest {
    message: string;
    profileId: TId;
    userName: string;
    metadata?: Map<string, string>;
    allEmotes: { [p: string]: Emote[] };
}

export interface MessageResponse extends MessageRequest {
    messageId: string;
    colourId: string;
    createDateTime: number;
    parsedMessage: string;
    badges: Badge[];
}

export interface Badge {
    name: string;
    url: string;
}


