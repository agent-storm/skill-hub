// src/types/database.types.ts
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
    public: {
        Tables: {
            testing: {
                Row: {
                    title: string;
                };
                Insert: {
                    id?: never;
                };
                Update: {
                    id?: never;
                };
            };
        };
    };
}
