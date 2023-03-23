const size = {
    title_main: 18,
    title_second: 16,
    title_third: 13,
    detail_main: 11,
    detail_second: 10,
    h1: 24
};

const color = {
    color_primary: "#9f4e9d",
    color_primary_second: "#00b1b2",
    color_primary_second_opacity: "#00b1b266",
    color_primary_third: "#b0dede",
    color_primary_light: "#b34dcc",
    color_primary_opacity: "#9f4e9d26",
    color_white: "#ffffff",
    color_black: "#000000",
    color_black_bg: "#00000026",
    color_voucher_used: '#5bbc33',
    color_voucher_used_bg: '#5bbc3326',
    color_voucher_active: '#ea8b1b',
    color_voucher_expire: '#919191',
    color_light_grey: "#f2f2f2",
    color_light_orange: "#fff8f0",
    color_grey_300: "#ededed",
    color_red: "#c62828",
    color_gift_red: "#fa5050",
    color_gift_green: "#65b517",
    color_icon: "#000000CC",
    color_dark_green: "#1b5e20",
    color_green: "#11bf0c",
    color_dark_grey: "#424242",
    color_grey: "#757575",
};

// background_color: "#FAFAFA",
const font = {
    main: 'Brown'
};

const value = {
}

const font_style = {
    text_large: {
        color: color.color_black,
        fontSize: size.title_main,
    },

};

const shadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
}

const cardPrimary = {
    ...shadow,
    backgroundColor: color.color_primary,
    borderRadius:15,
    elevation: 5
}

const cardWhite = {
    ...shadow,
    backgroundColor: color.color_white,
    borderRadius:15,
    elevation: 5
}

const fontFamily = "Sukhumvit Set"
const fontFamilyAndroid = "sukhumvitset_light"

const borderRadiusContent = 15

module.exports = {
    size,
    font,
    color,
    font_style,
    value,
    shadow,
    fontFamily,
    fontFamilyAndroid,
    cardPrimary,
    borderRadiusContent,
    cardWhite
}