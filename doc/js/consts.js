export const PAGEID = {
    INDEX: "index",
    CHECKIN: "M01checkIn",
    CHECKOUT: "M02checkOut",
    SEARCHRSV: "M03searchRSV",
    BILLING: "S01billing",
    CODEANDNUM: "S02codeAndNum",
    CODELIST: "S03codeList",
    OPTION: "S04option",
    INPUTFORM: "S05inputForm",
}

export const WINDOW_M = {
    CHECKIN: "checkIn",
    CHECKOUT: "checkOut",
    SEARCHRSV: "searchRSV",
}

export const WINDOW_S = {
    BILLING: "billing",
    CODEANDNUM: "codeAndNum",
    CODELIST: "codeList",
    OPTION: "option",
    INPUTFORM: "inputForm",
}

export const HEADER_M_STR = {
    [PAGEID.CHECKIN]: "到着",
    [PAGEID.CHECKOUT]: "出発",
    [PAGEID.SEARCHRSV]: "予約検索",
}

export const HEADER_S_STR = {
    [WINDOW_S.BILLING]: "会計",
    [WINDOW_S.CODEANDNUM]: {
        PAYMENT: "精算",
        POST: "計上",
    },
    [WINDOW_S.CODELIST]: "コード一覧",
    [WINDOW_S.OPTION]: "オプション",
    [WINDOW_S.INPUTFORM]: {
        ReceiptNameChange: "宛名変更",
    },
}

export const BTN = {
    PAYMENT: "0",
    POST: "1",
}