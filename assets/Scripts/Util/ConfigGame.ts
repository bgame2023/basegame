export default class ConfigGame {

    public static readonly API = {
      DEPOSIT: {
            MANUAL: {
                GET_BANK_AVAILABLE: "http://localhost:8009/api/deposit/manual/getActiveBank",
                CREATE_REQUEST_BANK: "http://localhost:8009/api/deposit/manual/createRequestBank",
            },
            AUTO: {
                GET_BANK_AVAILABLE: "http://localhost:8009/api/deposit/auto/getActiveBank",
                CREATE_REQUEST_BANK: "http://localhost:8009/api/deposit/auto/createRequestBank",
                CREATE_REQUEST_MOMO: "http://localhost:8009/api/deposit/auto/createRequestMomo",
            },
            CARD: {
                GET_CARD_ACTIVE: "http://localhost:8009/api/deposit/card/getCardActive",
                CREATE_REQUEST_CARD: "http://localhost:8009/api/deposit/card/createRequestCard",
            }
        },
      };
      public static readonly BASE_CONTROL = {
            MAIN_SOCKET_DEV: 'http://your-socket-io-server/dev',
            MAIN_SOCKET_PRO: 'http://your-socket-io-server/product',
      };
    static SOCKET: any;
}