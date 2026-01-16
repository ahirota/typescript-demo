declare global {
    interface Window {
        supportAI: supportAI;
    }
}

type supportAI = {
    version: string,
    enableAutoReply: () => void,
}

export {};