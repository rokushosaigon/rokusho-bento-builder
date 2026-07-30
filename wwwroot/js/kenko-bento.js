/* ============================================================
   ICONS — minimal kamon-style line icons, reused across items
   ============================================================ */
const ICONS = {
  beef:`<rect x="9" y="9" width="30" height="30" rx="9"/>
    <path d="M11 22l11-11M11 32l21-21M18 36l18-18M28 36l8-8"/>`,
  chicken:`<path d="M13 17c0-6 5-11 12-11 8 0 14 6 14 13 0 6-4 12-10 14l3 3.5c1 1.2.9 3-.4 4l-1 .8c-1.2.9-2.9.5-3.6-.8l-2-3.7c-.7.1-1.4.1-2 0-6-1-10-8-10-16z"/>
    <path d="M32 30.5l5 5.5c1 1.1.9 2.8-.3 3.7l-.8.6c-1.2.9-2.9.5-3.5-.8l-3-6"/>
    <path d="M16 18c3 1 6 1 9 0M15 23c3.5 1.5 8 1.5 12 0"/>`,
  duck:`<path d="M10 28c0-8 7-14 15-14 7 0 12 5 13 11-3 1-5-1-7-3 1 4-1 8-5 10-6 3-13 1-16-4z"/><circle cx="16" cy="20" r="1.1" fill="currentColor" stroke="none"/>`,
  fish:`<path d="M6 24c7-9 19-12 28-6-2 4-2 8 0 12-9 6-21 3-28-6z"/><path d="M34 18l8-5M34 30l8 5"/><circle cx="13" cy="22" r="1.1" fill="currentColor" stroke="none"/>`,
  shrimp:`<path d="M32 10c6 3 7 13 0 19-6 5-16 5-20-1 8 1 13-3 15-9 1-4 0-7 5-9z"/><path d="M22 10l-2-4M28 9l1-4"/>`,
  tofu:`<rect x="13" y="13" width="22" height="22" rx="3"/><circle cx="20" cy="20" r="1" fill="currentColor" stroke="none"/><circle cx="28" cy="20" r="1" fill="currentColor" stroke="none"/><circle cx="20" cy="28" r="1" fill="currentColor" stroke="none"/><circle cx="28" cy="28" r="1" fill="currentColor" stroke="none"/>`,
  rice:`<path d="M10 26c0-8 6-14 14-14s14 6 14 14"/><path d="M8 26h32v3a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z"/><path d="M20 8c0 2-2 2-2 4M28 8c0 2 2 2 2 4"/>`,
  noodle:`<path d="M10 14c4 4-4 6 0 10s-4 6 0 10"/><path d="M19 14c4 4-4 6 0 10s-4 6 0 10"/><path d="M28 14c4 4-4 6 0 10s-4 6 0 10"/>`,
  potato:`<ellipse cx="24" cy="24" rx="14" ry="10"/><circle cx="19" cy="22" r="1" fill="currentColor" stroke="none"/><circle cx="27" cy="26" r="1" fill="currentColor" stroke="none"/><circle cx="22" cy="28" r="1" fill="currentColor" stroke="none"/>`,
  leaf:`<path d="M14 34C10 22 18 10 34 10c2 16-10 24-20 24z"/><path d="M14 34c4-8 10-14 18-18"/>`,
  egg:`<path d="M24 10c8 0 14 10 14 18a14 10 0 0 1-28 0c0-8 6-18 14-18z"/><circle cx="24" cy="26" r="4" fill="currentColor" stroke="none"/>`,
  mushroom:`<path d="M10 22c0-7 6-12 14-12s14 5 14 12H10z"/><path d="M19 22v10a5 5 0 0 0 10 0V22"/>`,
  bean:`<path d="M14 34c-6-6-6-16 2-22 4 4 4 10 0 14-3 3-2 6 0 8z"/><path d="M22 38c-6-6-6-16 2-22 4 4 4 10 0 14-3 3-2 6 0 8z"/>`,
  root:`<path d="M20 6c1 3 1 6-1 8M28 6c-1 3-1 6 1 8"/>
    <path d="M24 12c7 1 11 8 9 17-1 6-5 11-9 13-4-2-8-7-9-13-2-9 2-16 9-17z"/>
    <path d="M24 18v18M19 22c1 3 1 8 3 11M29 22c-1 3-1 8-3 11"/>`,
  pumpkin:`<path d="M17 12c1-2 1-4 0-5M24 11V6M31 12c-1-2-1-4 0-5"/>
    <path d="M24 12c8 0 14 7 14 15s-6 15-14 15-14-7-14-15 6-15 14-15z"/>
    <path d="M24 12v30M18 14c-2 5-2 21 0 26M30 14c2 5 2 21 0 26"/>`,
  corn:`<path d="M24 8c6 4 10 14 8 26-6 2-12 2-16-2-4-10-1-20 8-24z"/><path d="M19 16h10M18 22h12M18 28h12"/>`,
  avocado:`<path d="M24 8c8 2 12 12 10 20-2 7-9 11-15 8-6-3-8-11-5-18 2-6 5-9 10-10z"/><circle cx="25" cy="26" r="5"/>`,
  tomato:`<path d="M24 14c8 0 13 6 13 14a13 13 0 0 1-26 0c0-8 5-14 13-14z"/><path d="M19 12c2 2 8 2 10 0"/>`,
  wave:`<path d="M8 16c4-4 8-4 12 0s8 4 12 0 8-4 12 0"/><path d="M8 24c4-4 8-4 12 0s8 4 12 0 8-4 12 0"/><path d="M8 32c4-4 8-4 12 0s8 4 12 0 8-4 12 0"/>`,
  droplet:`<path d="M24 8c6 9 12 16 12 22a12 12 0 0 1-24 0c0-6 6-13 12-22z"/>`,
  citrus:`<circle cx="24" cy="24" r="14"/><path d="M24 10v28M10 24h28M14 14l20 20M34 14L14 34"/>`,
  sesame:`<circle cx="16" cy="16" r="2"/><circle cx="28" cy="14" r="2"/><circle cx="34" cy="26" r="2"/><circle cx="22" cy="30" r="2"/><circle cx="14" cy="30" r="2"/><circle cx="30" cy="34" r="2"/>`
};
function iconSvg(key){ return `<svg viewBox="0 0 48 48" class="icon-svg">${ICONS[key]||ICONS.leaf}</svg>`; }

// Official kenkobento.png wordmark, used as a temporary placeholder photo
// for cart lines/order items/receipt thumbnails until real dish photography
// exists for each bento.
const LOGO_MARK_SRC = 'img/kenko-bento-logo.png';

/* flat pastel wash + text tone per ingredient category — no gradients */
const CAT_PASTEL = {
  protein:{bg:'#FDEBEC', text:'#9F2F2D'},
  carbs:{bg:'#FBF3DB', text:'#956400'},
  side:{bg:'#EDF3EC', text:'#346538'},
  sauce:{bg:'#E1F3FE', text:'#1F6C9F'}
};

/* ============================================================
   I18N — English / Vietnamese / Japanese / Korean / Chinese
   Default language is English. Choice persists in localStorage.
   ============================================================ */
const I18N = {
  "en": {
    "nav_menu": "Your Bento",
    "nav_about": "About Us",
    "mode_byo": "Build your own",
    "mode_picks": "Chef's picks",
    "picks_eyebrow": "Ready in one tap",
    "picks_title": "Chef's picks",
    "picks_desc": "House bentos across four collections — pick a quantity and send it straight to your cart.",
    "picks_search_placeholder": "Search bentos…",
    "picks_filter_all": "All",
    "picks_veg_quick": "Vegetarian",
    "picks_no_results": "No bentos match your search.",
    "add_to_cart_short": "Add to cart",
    "ing_detail_done": "Done",
    "chefs_pick_label": "Chef's pick",
    "chefs_pick_customized_label": "Chef's pick · Customized",
    "pick_customize_addons": "Add extra",
    "pick_customize_note": "Note",
    "pick_customize_extra_note": "from customization",
    "cart_swap_replaces": "instead of",
    "cart_continue_delivery": "Continue to delivery time",
    "delivery_time_title": "Delivery time",
    "step2of3": "Step 2 of 3",
    "step3of3": "Step 3 of 3",
    "checkout_note_late": "It's past 6:00 PM, so the earliest available delivery date is in 2 days. Orders placed before 6:00 PM can get next-day delivery.",
    "checkout_note_ontime": "Order before 6:00 PM today for tomorrow's delivery. Any date further out is always available, with no cutoff.",
    "delivery_date_label": "Delivery date",
    "delivery_slot_label": "Delivery time slot",
    "checkout_slot_note": "Times are an estimate — our rider will arrive within the selected 30-minute window, every day from 11:00 AM to 1:30 PM.",
    "continue_details": "Continue to your details",
    "label_address": "Delivery address",
    "address_placeholder": "Street, ward, district, city",
    "distance_checking": "Checking distance…",
    "distance_label": "Distance from Rokusho",
    "distance_duration_prefix": "about",
    "label_email": "Email (optional)",
    "email_placeholder": "you@email.com",
    "autofill_note": "We found your saved details — feel free to edit them.",
    "order_delivery": "Delivery",
    "order_address": "Address",
    "order_confirmed_title": "Request confirmed",
    "cart_nutrition_total": "Nutrition total",
    "cart_nutrition_note": "Nutrition values are estimates and may vary slightly in practice.",
    "order_nutrition_total": "Nutrition total",
    "hero_eyebrow": "Calorie calculator",
    "hero_title": "Mix & Match Your Bento",
    "hero_desc": "Pick your protein, carbs, sides and sauce in pure Japanese style — delicious, balanced, made exactly your way.",
    "step1_title": "Select protein",
    "step1_desc": "Grilled the Japanese way — locking in flavour and nutrition.",
    "step2_title": "Select carbs",
    "step2_desc": "From Japanese rice to soba — choose the base of your bento.",
    "step3_title": "Select sides",
    "step3_desc": "Add colour, crunch and fibre.",
    "step4_title": "Select sauce",
    "step4_desc": "Pure Japanese flavour, made to drizzle.",
    "step_added": "added",
    "tab_protein": "Protein",
    "tab_carbs": "Carbs",
    "tab_side": "Sides",
    "tab_sauce": "Sauce",
    "label_kcal": "Kcal",
    "label_protein": "Protein",
    "label_carbs": "Carbs",
    "label_fat": "Fat",
    "label_price": "Price",
    "cart_subtotal_label": "Subtotal",
    "cart_subtotal_note": "VAT included; delivery fee not included.",
    "panel_your_bento": "Your bento",
    "panel_clear": "Clear",
    "panel_download": "Download",
    "panel_add_to_cart": "Add this bento to cart",
    "panel_cat_empty": "Not selected yet",
    "fab_view_bento": "View bento",
    "cart_your_cart": "Your cart",
    "cart_empty": "Your cart is empty — add a custom bento to get started.",
    "cart_est_total": "Estimated total",
    "cart_show_ing": "Show ingredients",
    "cart_hide_ing": "Hide ingredients",
    "cart_edit_details": "View details & edit",
    "cart_add_note": "Add a note",
    "line_note_placeholder": "Note for this bento (e.g. no chili, extra sauce)...",
    "cart_save_changes": "Save changes",
    "custom_bento_label": "Custom bento",
    "ingredient_singular": "ingredient",
    "ingredient_plural": "ingredients",
    "back_btn": "Back",
    "contact_title": "Your details",
    "label_phone": "Phone number",
    "phone_placeholder": "e.g. 0900000001",
    "label_title_field": "Title",
    "title_mr": "Mr",
    "title_ms": "Ms",
    "label_fullname": "Full name",
    "fullname_placeholder": "Your name",
    "label_notes": "Notes / special requests (optional)",
    "notes_placeholder": "e.g. no chili, peanut allergy...",
    "confirm_request": "Confirm request",
    "order_done_title": "Thank you",
    "order_done_desc": "Your request has been received and our team will follow up shortly.",
    "screenshot_note": "Please take a screenshot of this screen to save your order code.",
    "followup_note": "Our team will contact you shortly to confirm your order and proceed with payment.",
    "order_items": "Items",
    "order_contact": "Contact",
    "order_notes": "Notes",
    "line_note_label": "Note",
    "new_order_btn": "Start a new request",
    "order_default_name": "there",
    "toast_added": "Added to cart",
    "toast_cart_updated": "Cart updated",
    "toast_fill_fields": "Please fill in your name, phone number and delivery address.",
    "toast_slow_down": "Please wait a few seconds before submitting again.",
    "soba_sauce_confirm": "Soba only pairs with mentsuyu sauce. Are you sure you want to change the sauce?",
    "menu_load_error": "Couldn't load the menu right now.",
    "menu_load_retry": "Retry",
    "toast_menu_updated_items_removed": "The menu just changed — some of your selected items are no longer available and were removed.",
    "footer_tagline": "Your Japanese-style healthy food companion.",
    "footer_contact": "Contact",
    "hours_dining_label": "Rokusho | Modern Izakaya",
    "hours_dining_time": "Mon – Sun · 5PM – Late",
    "hours_lunch_label": "Kenko Bento | Lunch Delivery",
    "hours_lunch_time": "Mon – Sun · 11AM – 1:30PM",
    "footer_follow": "Follow",
    "footer_order_on": "Order on",
    "footer_directions": "Get directions",
    "footer_reviews": "Google reviews",
    "footer_demo_notice": "This website is currently a demo and is not yet used for commercial purposes.",
    "footer_copyright": "© 2026 Kenko Bento by Rokusho. All rights reserved.",
    "footer_privacy": "Privacy policy · Terms",
    "lang_switcher_label": "Language"
  },
  "vi": {
  "nav_menu": "Bento của bạn",
  "nav_about": "Về chúng tôi",

  "mode_byo": "Tự tạo Bento",
  "mode_picks": "Set nổi bật",
  "picks_eyebrow": "Chọn nhanh",
  "picks_title": "Bento nổi bật",
  "picks_desc": "Các set Bento bán chạy do đầu bếp tuyển chọn. Chỉ cần chọn số lượng và thêm vào giỏ hàng.",
  "picks_search_placeholder": "Tìm bento…",
  "picks_filter_all": "Tất cả",
  "picks_veg_quick": "Chay",
  "picks_no_results": "Không tìm thấy bento phù hợp.",
  "add_to_cart_short": "Thêm vào giỏ",
  "ing_detail_done": "Xong",
  "chefs_pick_label": "Bento có sẵn",
  "chefs_pick_customized_label": "Bento có sẵn · Đã tùy chỉnh",
  "pick_customize_addons": "Thêm món",
  "pick_customize_note": "Ghi chú",
  "pick_customize_extra_note": "từ tùy chỉnh",
  "cart_swap_replaces": "thay cho",
  "cart_continue_delivery": "Tiếp tục",
  "delivery_time_title": "Thời gian giao hàng",
  "step2of3": "Bước 2/3",
  "step3of3": "Bước 3/3",
  "checkout_note_late": "Đã sau 18:00. Đơn sớm nhất sẽ được giao sau 2 ngày. Đặt trước 18:00 để được giao vào ngày hôm sau.",
  "checkout_note_ontime": "Đặt trước 18:00 hôm nay để nhận hàng vào ngày mai. Bạn cũng có thể chọn bất kỳ ngày nào sau đó.",
  "delivery_date_label": "Ngày giao",
  "delivery_slot_label": "Khung giờ giao",
  "checkout_slot_note": "Thời gian giao mang tính dự kiến trong khung giờ bạn đã chọn (11:00 - 13:30).",
  "continue_details": "Tiếp tục",
  "label_address": "Địa chỉ nhận hàng",
  "address_placeholder": "Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố",
  "distance_checking": "Đang tính khoảng cách…",
  "distance_label": "Khoảng cách tới Rokusho",
  "distance_duration_prefix": "khoảng",
  "label_email": "Email (không bắt buộc)",
  "email_placeholder": "email@example.com",
  "autofill_note": "Thông tin của bạn đã được điền sẵn. Bạn có thể chỉnh sửa nếu cần.",
  "order_delivery": "Giao hàng",
  "order_address": "Địa chỉ",

  "order_confirmed_title": "Đã xác nhận yêu cầu",

  "cart_nutrition_total": "Tổng dinh dưỡng",
  "cart_nutrition_note": "Giá trị dinh dưỡng là ước tính, có thể có sai số trong thực tế.",
  "order_nutrition_total": "Tổng dinh dưỡng",

  "hero_eyebrow": "Tính dinh dưỡng",
  "hero_title": "Tự do kết hợp Bento theo ý bạn",
  "hero_desc": "Tự chọn Protein, tinh bột, món ăn kèm và nước sốt để tạo nên hộp Bento chuẩn vị Nhật theo sở thích của bạn.",

  "step1_title": "Chọn Protein",
  "step1_desc": "Nướng chuẩn kiểu Nhật, giữ trọn vị ngon và dinh dưỡng.",

  "step2_title": "Chọn Tinh bột",
  "step2_desc": "Lựa chọn nền tảng cho hộp Bento của bạn.",

  "step3_title": "Chọn Món ăn kèm",
  "step3_desc": "Bổ sung rau củ và chất xơ cho bữa ăn cân bằng.",

  "step4_title": "Chọn Nước sốt",
  "step4_desc": "Hoàn thiện hương vị chuẩn Nhật.",

  "step_added": "Đã thêm",

  "tab_protein": "Protein",
  "tab_carbs": "Tinh bột",
  "tab_side": "Ăn kèm",
  "tab_sauce": "Nước sốt",

  "label_kcal": "Kcal",
  "label_protein": "Protein",
  "label_carbs": "Tinh bột",
  "label_fat": "Chất béo",
  "label_price": "Giá",
  "cart_subtotal_label": "Tạm tính",
  "cart_subtotal_note": "Đã bao gồm VAT, chưa bao gồm phí vận chuyển.",

  "panel_your_bento": "Bento của bạn",
  "panel_clear": "Xóa tất cả",
  "panel_download": "Tải xuống",
  "panel_add_to_cart": "Thêm Bento vào giỏ",
  "panel_cat_empty": "Chưa chọn",

  "fab_view_bento": "Xem Bento",

  "cart_your_cart": "Giỏ hàng",
  "cart_empty": "Giỏ hàng đang trống.",
  "cart_est_total": "Tạm tính",
  "cart_show_ing": "Xem nguyên liệu",
  "cart_hide_ing": "Ẩn nguyên liệu",
  "cart_edit_details": "Xem chi tiết & sửa",
  "cart_add_note": "Thêm ghi chú",
  "line_note_placeholder": "Ghi chú cho món này (vd: không cay, thêm sốt...)",
  "cart_save_changes": "Lưu thay đổi",

  "custom_bento_label": "Bento tự chọn",

  "ingredient_singular": "nguyên liệu",
  "ingredient_plural": "nguyên liệu",

  "back_btn": "Quay lại",

  "contact_title": "Thông tin liên hệ",

  "label_phone": "Số điện thoại",
  "phone_placeholder": "Ví dụ: 0901234567",

  "label_title_field": "Danh xưng",
  "title_mr": "Anh",
  "title_ms": "Chị",
  "label_fullname": "Họ và tên",
  "fullname_placeholder": "Nhập họ và tên",

  "label_notes": "Ghi chú / yêu cầu khác (không bắt buộc)",
  "notes_placeholder": "VD: không ăn cay, dị ứng đậu phộng...",

  "confirm_request": "Xác nhận yêu cầu",

  "order_done_title": "Cảm ơn bạn!",
  "order_done_desc": "Yêu cầu của bạn đã được tiếp nhận. Nhân viên sẽ sớm liên hệ để xác nhận.",

  "screenshot_note": "Vui lòng chụp màn hình để lưu mã đơn hàng.",

  "followup_note": "Nhân viên sẽ sớm liên hệ để xác nhận đơn hàng và hướng dẫn thanh toán.",

  "order_items": "Sản phẩm",
  "order_contact": "Liên hệ",
  "order_notes": "Ghi chú",
  "line_note_label": "Ghi chú",

  "new_order_btn": "Tạo yêu cầu mới",

  "order_default_name": "bạn",

  "toast_added": "Đã thêm vào giỏ hàng",
  "toast_cart_updated": "Đã cập nhật giỏ hàng",
  "toast_fill_fields": "Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ nhận hàng.",
  "soba_sauce_confirm": "Mì soba chỉ hợp với sốt Mentsuyu. Bạn có chắc muốn đổi sang sốt khác không?",
  "toast_slow_down": "Vui lòng đợi vài giây trước khi gửi lại.",
  "menu_load_error": "Không tải được thực đơn lúc này.",
  "menu_load_retry": "Thử lại",
  "toast_menu_updated_items_removed": "Thực đơn vừa được cập nhật — một số món bạn chọn không còn nữa nên đã được gỡ ra.",

  "footer_tagline": "Bento chuẩn Nhật mỗi ngày.",
  "footer_contact": "Liên hệ",
  "hours_dining_label": "Rokusho | Modern Izakaya",
  "hours_dining_time": "Thứ 2 - CN · 17:00 - Muộn",
  "hours_lunch_label": "Kenko Bento | Lunch Delivery",
  "hours_lunch_time": "Thứ 2 - CN · 11:00 - 13:30",
  "footer_follow": "Theo dõi",
  "footer_order_on": "Đặt món trên",
  "footer_directions": "Chỉ đường",
  "footer_reviews": "Đánh giá trên Google",

  "footer_demo_notice": "Website đang trong quá trình demo, chưa được sử dụng cho mục đích thương mại.",
  "footer_copyright": "© 2026 Kenko Bento by Rokusho. Bảo lưu mọi quyền.",
  "footer_privacy": "Chính sách bảo mật · Điều khoản",

  "lang_switcher_label": "Ngôn ngữ"
},
  "ja": {
    "nav_menu": "マイ弁当",
    "nav_about": "店舗情報",
    "mode_byo": "自分で作る",
    "mode_picks": "シェフのおすすめ",
    "picks_eyebrow": "ワンタップで注文完了",
    "picks_title": "シェフのおすすめ",
    "picks_desc": "4つのコレクションから選べる弁当 — 数量を選んでそのままカートへ。",
    "picks_search_placeholder": "弁当を検索…",
    "picks_filter_all": "すべて",
    "picks_veg_quick": "ベジタリアン",
    "picks_no_results": "該当する弁当が見つかりません。",
    "add_to_cart_short": "カートに追加",
    "ing_detail_done": "完了",
    "chefs_pick_label": "おすすめセット",
    "chefs_pick_customized_label": "おすすめセット・カスタム",
    "pick_customize_addons": "追加する",
    "pick_customize_note": "備考",
    "pick_customize_extra_note": "カスタム分",
    "cart_swap_replaces": "の代わりに",
    "cart_continue_delivery": "配達時間の選択へ進む",
    "delivery_time_title": "配達時間",
    "step2of3": "ステップ 2/3",
    "step3of3": "ステップ 3/3",
    "checkout_note_late": "18時を過ぎているため、最短のお届け日は2日後です。18時前のご注文は翌日お届け可能です。",
    "checkout_note_ontime": "本日18時までのご注文で翌日お届け可能です。それ以降の日付はいつでもお選びいただけます。",
    "delivery_date_label": "お届け日",
    "delivery_slot_label": "お届け時間帯",
    "checkout_slot_note": "時間は目安です — 配達員は選択された30分の枠内（毎日11:00〜13:30）にお伺いします。",
    "continue_details": "お客様情報の入力へ",
    "label_address": "配達先住所",
    "address_placeholder": "番地・町名・区・市",
    "distance_checking": "距離を計算中…",
    "distance_label": "Rokushoからの距離",
    "distance_duration_prefix": "約",
    "label_email": "メールアドレス（任意）",
    "email_placeholder": "you@email.com",
    "autofill_note": "保存済みの情報が見つかりました — 必要に応じて編集できます。",
    "order_delivery": "お届け",
    "order_address": "住所",
    "order_confirmed_title": "リクエストを確定しました",
    "cart_nutrition_total": "栄養素の合計",
    "cart_nutrition_note": "栄養価は目安であり、実際とは多少異なる場合があります。",
    "order_nutrition_total": "栄養素の合計",
    "hero_eyebrow": "カロリー計算",
    "hero_title": "お好きな組み合わせでお弁当を",
    "hero_desc": "タンパク質・炭水化物・副菜・ソースを純和風スタイルで選べます — おいしく、バランスよく、あなた好みに。",
    "step1_title": "タンパク質を選ぶ",
    "step1_desc": "和風グリルスタイル — うまみと栄養を閉じ込めます。",
    "step2_title": "炭水化物を選ぶ",
    "step2_desc": "白ごはんからそばまで — 弁当のベースを選びましょう。",
    "step3_title": "副菜を選ぶ",
    "step3_desc": "彩り・食感・食物繊維をプラス。",
    "step4_title": "ソースを選ぶ",
    "step4_desc": "純和風の味わいを、お好みでかけて。",
    "step_added": "個選択中",
    "tab_protein": "タンパク質",
    "tab_carbs": "炭水化物",
    "tab_side": "副菜",
    "tab_sauce": "ソース",
    "label_kcal": "Kcal",
    "label_protein": "タンパク質",
    "label_carbs": "炭水化物",
    "label_fat": "脂質",
    "label_price": "価格",
    "cart_subtotal_label": "小計",
    "cart_subtotal_note": "消費税込み、配送料は含まれていません。",
    "panel_your_bento": "あなたの弁当",
    "panel_clear": "クリア",
    "panel_download": "ダウンロード",
    "panel_add_to_cart": "この弁当をカートに追加",
    "panel_cat_empty": "まだ選択されていません",
    "fab_view_bento": "弁当を見る",
    "cart_your_cart": "カート",
    "cart_empty": "カートは空です — 自分で作った弁当を追加してください。",
    "cart_est_total": "合計金額(概算)",
    "cart_show_ing": "具材を見る",
    "cart_hide_ing": "具材を隠す",
    "cart_edit_details": "詳細を見る・編集",
    "cart_add_note": "備考を追加",
    "line_note_placeholder": "この弁当へのご要望（例：辛さ控えめ、ソース多めなど）",
    "cart_save_changes": "変更を保存",
    "custom_bento_label": "カスタム弁当",
    "ingredient_singular": "具材",
    "ingredient_plural": "具材",
    "back_btn": "戻る",
    "contact_title": "お客様情報",
    "label_phone": "電話番号",
    "phone_placeholder": "例:0900000001",
    "label_title_field": "敬称",
    "title_mr": "男性",
    "title_ms": "女性",
    "label_fullname": "お名前",
    "fullname_placeholder": "お名前を入力",
    "label_notes": "備考・ご要望（任意）",
    "notes_placeholder": "例：辛いものNG、ピーナッツアレルギーなど",
    "confirm_request": "リクエストを確定する",
    "order_done_title": "ありがとうございます",
    "order_done_desc": "リクエストを承りました。担当スタッフより追ってご連絡いたします。",
    "screenshot_note": "注文コードを保存するため、この画面のスクリーンショットを撮ってください。",
    "followup_note": "担当スタッフより追ってご連絡し、ご注文の確認とお支払い手続きを行います。",
    "order_items": "点数",
    "order_contact": "連絡先",
    "order_notes": "備考",
    "line_note_label": "備考",
    "new_order_btn": "新しいリクエストを始める",
    "order_default_name": "お客様",
    "toast_added": "カートに追加しました",
    "toast_cart_updated": "カートを更新しました",
    "toast_fill_fields": "お名前・電話番号・配達先住所をご入力ください。",
    "soba_sauce_confirm": "そばはめんつゆとの相性が一番です。ソースを変更してもよろしいですか？",
    "toast_slow_down": "数秒待ってから再度お試しください。",
    "menu_load_error": "只今メニューを読み込めませんでした。",
    "menu_load_retry": "再試行",
    "toast_menu_updated_items_removed": "メニューが更新されました — 選択していた一部の商品がなくなったため削除されました。",
    "footer_tagline": "あなたの和風ヘルシーフードパートナー。",
    "footer_contact": "お問い合わせ",
    "hours_dining_label": "Rokusho | Modern Izakaya",
    "hours_dining_time": "月〜日・17:00〜遅くまで",
    "hours_lunch_label": "Kenko Bento | Lunch Delivery",
    "hours_lunch_time": "月〜日・11:00〜13:30",
    "footer_follow": "フォロー",
    "footer_order_on": "注文はこちら",
    "footer_directions": "道順を見る",
    "footer_reviews": "Googleクチコミ",
    "footer_demo_notice": "本サイトは現在デモ段階であり、商用目的にはまだ使用されていません。",
    "footer_copyright": "© 2026 Kenko Bento by Rokusho. All rights reserved.",
    "footer_privacy": "プライバシーポリシー・利用規約",
    "lang_switcher_label": "言語"
  },
  "ko": {
    "nav_menu": "내 벤토",
    "nav_about": "매장 정보",
    "mode_byo": "직접 구성하기",
    "mode_picks": "셰프 추천",
    "picks_eyebrow": "한 번의 탭으로 완성",
    "picks_title": "셰프 추천",
    "picks_desc": "4가지 컬렉션으로 구성된 시그니처 벤토 — 수량을 선택하고 바로 장바구니에 담아보세요.",
    "picks_search_placeholder": "벤토 검색…",
    "picks_filter_all": "전체",
    "picks_veg_quick": "채식",
    "picks_no_results": "검색 결과와 일치하는 벤토가 없습니다.",
    "add_to_cart_short": "장바구니 담기",
    "ing_detail_done": "완료",
    "chefs_pick_label": "셰프 추천 세트",
    "chefs_pick_customized_label": "셰프 추천 세트 · 커스텀",
    "pick_customize_addons": "추가하기",
    "pick_customize_note": "메모",
    "pick_customize_extra_note": "커스텀 추가분",
    "cart_swap_replaces": "대신",
    "cart_continue_delivery": "배달 시간 선택으로 이동",
    "delivery_time_title": "배달 시간",
    "step2of3": "3단계 중 2단계",
    "step3of3": "3단계 중 3단계",
    "checkout_note_late": "오후 6시가 지나 가장 빠른 배달일은 2일 후입니다. 오후 6시 이전 주문 시 다음날 배달이 가능합니다.",
    "checkout_note_ontime": "오늘 오후 6시 이전 주문 시 내일 배달이 가능합니다. 그 이후 날짜는 언제든 선택할 수 있습니다.",
    "delivery_date_label": "배달 날짜",
    "delivery_slot_label": "배달 시간대",
    "checkout_slot_note": "시간은 예상 기준입니다 — 라이더는 매일 11:00~13:30 사이, 선택하신 30분 구간 내에 도착합니다.",
    "continue_details": "상세 정보 입력으로 이동",
    "label_address": "배달 주소",
    "address_placeholder": "도로명, 동, 구, 시",
    "distance_checking": "거리 계산 중…",
    "distance_label": "Rokusho로부터의 거리",
    "distance_duration_prefix": "약",
    "label_email": "이메일 (선택 사항)",
    "email_placeholder": "you@email.com",
    "autofill_note": "저장된 정보를 찾았습니다 — 필요하면 자유롭게 수정하세요.",
    "order_delivery": "배달",
    "order_address": "주소",
    "order_confirmed_title": "요청이 확정되었습니다",
    "cart_nutrition_total": "영양 합계",
    "cart_nutrition_note": "영양 정보는 추정치이며 실제와 다소 차이가 있을 수 있습니다.",
    "order_nutrition_total": "영양 합계",
    "hero_eyebrow": "칼로리 계산기",
    "hero_title": "취향대로 도시락을 골라보세요",
    "hero_desc": "단백질, 탄수화물, 사이드, 소스를 정통 일본식으로 골라보세요 — 맛있고 균형 잡힌, 나만의 방식으로.",
    "step1_title": "단백질 선택",
    "step1_desc": "일본식 그릴 방식 — 풍미와 영양을 그대로 담아냅니다.",
    "step2_title": "탄수화물 선택",
    "step2_desc": "일본식 쌀밥부터 소바까지 — 벤토의 베이스를 골라보세요.",
    "step3_title": "사이드 선택",
    "step3_desc": "색감, 아삭함, 식이섬유를 더해보세요.",
    "step4_title": "소스 선택",
    "step4_desc": "정통 일본식 풍미, 곁들여 뿌려보세요.",
    "step_added": "개 선택됨",
    "tab_protein": "단백질",
    "tab_carbs": "탄수화물",
    "tab_side": "사이드",
    "tab_sauce": "소스",
    "label_kcal": "Kcal",
    "label_protein": "단백질",
    "label_carbs": "탄수화물",
    "label_fat": "지방",
    "label_price": "가격",
    "cart_subtotal_label": "소계",
    "cart_subtotal_note": "부가세 포함, 배송비는 별도입니다.",
    "panel_your_bento": "나의 벤토",
    "panel_clear": "초기화",
    "panel_download": "다운로드",
    "panel_add_to_cart": "이 벤토를 장바구니에 담기",
    "panel_cat_empty": "아직 선택하지 않음",
    "fab_view_bento": "벤토 보기",
    "cart_your_cart": "장바구니",
    "cart_empty": "장바구니가 비어 있습니다 — 커스텀 벤토를 담아보세요.",
    "cart_est_total": "예상 총 금액",
    "cart_show_ing": "재료 보기",
    "cart_hide_ing": "재료 숨기기",
    "cart_edit_details": "상세 보기 및 수정",
    "cart_add_note": "메모 추가",
    "line_note_placeholder": "이 도시락에 대한 요청사항 (예: 맵지 않게, 소스 추가)",
    "cart_save_changes": "변경사항 저장",
    "custom_bento_label": "커스텀 벤토",
    "ingredient_singular": "재료",
    "ingredient_plural": "재료",
    "back_btn": "뒤로",
    "contact_title": "고객 정보",
    "label_phone": "전화번호",
    "phone_placeholder": "예: 0900000001",
    "label_title_field": "호칭",
    "title_mr": "남성",
    "title_ms": "여성",
    "label_fullname": "이름",
    "fullname_placeholder": "이름을 입력하세요",
    "label_notes": "메모 / 요청 사항 (선택)",
    "notes_placeholder": "예: 맵지 않게, 땅콩 알레르기 등",
    "confirm_request": "요청 확정",
    "order_done_title": "감사합니다",
    "order_done_desc": "요청이 접수되었으며 저희 팀이 곧 연락드리겠습니다.",
    "screenshot_note": "주문 코드를 저장하려면 이 화면을 캡처해 주세요.",
    "followup_note": "저희 팀이 곧 연락드려 주문을 확인하고 결제를 진행해 드리겠습니다.",
    "order_items": "품목 수",
    "order_contact": "연락처",
    "order_notes": "메모",
    "line_note_label": "메모",
    "new_order_btn": "새 요청 시작하기",
    "order_default_name": "고객님",
    "toast_added": "장바구니에 담았습니다",
    "toast_cart_updated": "장바구니를 업데이트했습니다",
    "toast_fill_fields": "이름, 전화번호, 배달 주소를 입력해 주세요.",
    "soba_sauce_confirm": "소바는 멘츠유 소스와 가장 잘 어울립니다. 소스를 변경하시겠습니까?",
    "toast_slow_down": "몇 초 후에 다시 시도해 주세요.",
    "menu_load_error": "지금은 메뉴를 불러올 수 없습니다.",
    "menu_load_retry": "다시 시도",
    "toast_menu_updated_items_removed": "메뉴가 방금 업데이트되었습니다 — 선택하신 일부 항목이 더 이상 제공되지 않아 제거되었습니다.",
    "footer_tagline": "당신의 일본식 건강식 파트너.",
    "footer_contact": "문의",
    "hours_dining_label": "Rokusho | Modern Izakaya",
    "hours_dining_time": "월 – 일 · 오후 5시 – 늦게까지",
    "hours_lunch_label": "Kenko Bento | Lunch Delivery",
    "hours_lunch_time": "월 – 일 · 오전 11시 – 오후 1시 30분",
    "footer_follow": "팔로우",
    "footer_order_on": "주문하기",
    "footer_directions": "길찾기",
    "footer_reviews": "Google 리뷰",
    "footer_demo_notice": "이 웹사이트는 현재 데모 단계이며 아직 상업적 목적으로 사용되지 않습니다.",
    "footer_copyright": "© 2026 Kenko Bento by Rokusho. All rights reserved.",
    "footer_privacy": "개인정보 처리방침 · 이용약관",
    "lang_switcher_label": "언어"
  },
  "zh": {
    "nav_menu": "我的便当",
    "nav_about": "关于我们",
    "mode_byo": "自选搭配",
    "mode_picks": "主厨精选",
    "picks_eyebrow": "一键即可下单",
    "picks_title": "主厨精选",
    "picks_desc": "四大系列招牌便当 —— 选择数量，直接加入购物车。",
    "picks_search_placeholder": "搜索便当…",
    "picks_filter_all": "全部",
    "picks_veg_quick": "素食",
    "picks_no_results": "没有找到符合条件的便当。",
    "add_to_cart_short": "加入购物车",
    "ing_detail_done": "完成",
    "chefs_pick_label": "主厨精选",
    "chefs_pick_customized_label": "主厨精选 · 已定制",
    "pick_customize_addons": "加购",
    "pick_customize_note": "备注",
    "pick_customize_extra_note": "定制新增",
    "cart_swap_replaces": "替代",
    "cart_continue_delivery": "继续选择送达时间",
    "delivery_time_title": "送达时间",
    "step2of3": "第2步，共3步",
    "step3of3": "第3步，共3步",
    "checkout_note_late": "已过晚上6点，最早可送达日期为2天后。晚上6点前下单可享次日送达。",
    "checkout_note_ontime": "今天晚上6点前下单可于明天送达。更远的日期随时可选，没有限制。",
    "delivery_date_label": "送达日期",
    "delivery_slot_label": "送达时间段",
    "checkout_slot_note": "时间为预估 —— 骑手将在您选择的30分钟时段内送达，每日11:00至13:30。",
    "continue_details": "继续填写详细信息",
    "label_address": "送达地址",
    "address_placeholder": "街道、坊/村、区、城市",
    "distance_checking": "正在计算距离…",
    "distance_label": "距离 Rokusho",
    "distance_duration_prefix": "约",
    "label_email": "电子邮箱（选填）",
    "email_placeholder": "you@email.com",
    "autofill_note": "已找到您保存的信息 —— 可随时修改。",
    "order_delivery": "配送",
    "order_address": "地址",
    "order_confirmed_title": "请求已确认",
    "cart_nutrition_total": "营养总计",
    "cart_nutrition_note": "营养数值仅供参考，实际情况可能略有差异。",
    "order_nutrition_total": "营养总计",
    "hero_eyebrow": "卡路里计算器",
    "hero_title": "自由搭配你的便当",
    "hero_desc": "以纯正日式风格挑选蛋白质、碳水、配菜与酱汁 —— 美味均衡，完全按你的喜好搭配。",
    "step1_title": "选择蛋白质",
    "step1_desc": "日式炭烤风味 —— 锁住美味与营养。",
    "step2_title": "选择碳水",
    "step2_desc": "从日式米饭到荞麦面 —— 选择便当的基底。",
    "step3_title": "选择配菜",
    "step3_desc": "增添色彩、爽脆口感与膳食纤维。",
    "step4_title": "选择酱汁",
    "step4_desc": "纯正日式风味，淋在便当上恰到好处。",
    "step_added": "已选",
    "tab_protein": "蛋白质",
    "tab_carbs": "碳水",
    "tab_side": "配菜",
    "tab_sauce": "酱汁",
    "label_kcal": "Kcal",
    "label_protein": "蛋白质",
    "label_carbs": "碳水",
    "label_fat": "脂肪",
    "label_price": "价格",
    "cart_subtotal_label": "小计",
    "cart_subtotal_note": "已含增值税，不含配送费。",
    "panel_your_bento": "我的便当",
    "panel_clear": "清空",
    "panel_download": "下载",
    "panel_add_to_cart": "将此便当加入购物车",
    "panel_cat_empty": "尚未选择",
    "fab_view_bento": "查看便当",
    "cart_your_cart": "购物车",
    "cart_empty": "购物车是空的 —— 添加自选便当开始下单吧。",
    "cart_est_total": "预估总计",
    "cart_show_ing": "查看食材",
    "cart_hide_ing": "隐藏食材",
    "cart_edit_details": "查看详情并修改",
    "cart_add_note": "添加备注",
    "line_note_placeholder": "此便当的备注（例如：不要辣、多加酱）",
    "cart_save_changes": "保存修改",
    "custom_bento_label": "自选便当",
    "ingredient_singular": "种食材",
    "ingredient_plural": "种食材",
    "back_btn": "返回",
    "contact_title": "您的详细信息",
    "label_phone": "电话号码",
    "phone_placeholder": "例如：0900000001",
    "label_title_field": "称呼",
    "title_mr": "先生",
    "title_ms": "女士",
    "label_fullname": "姓名",
    "fullname_placeholder": "请输入姓名",
    "label_notes": "备注/其他要求（选填）",
    "notes_placeholder": "例如：不要辣、对花生过敏等",
    "confirm_request": "确认请求",
    "order_done_title": "感谢您的订购",
    "order_done_desc": "您的请求已提交，我们的团队将很快与您联系。",
    "screenshot_note": "请截图保存此页面以保留您的订单编号。",
    "followup_note": "我们的团队将很快与您联系，确认订单并处理付款。",
    "order_items": "商品数",
    "order_contact": "联系方式",
    "order_notes": "备注",
    "line_note_label": "备注",
    "new_order_btn": "开始新请求",
    "order_default_name": "您",
    "toast_added": "已加入购物车",
    "toast_cart_updated": "购物车已更新",
    "toast_fill_fields": "请填写姓名、电话号码和送达地址。",
    "soba_sauce_confirm": "荞麦面最适合搭配蘸面汁（Mentsuyu）。确定要更换酱汁吗？",
    "toast_slow_down": "请稍等几秒后再试。",
    "menu_load_error": "暂时无法加载菜单。",
    "menu_load_retry": "重试",
    "toast_menu_updated_items_removed": "菜单刚刚更新——您选择的部分商品已不可用，已自动移除。",
    "footer_tagline": "您的日式健康餐伙伴。",
    "footer_contact": "联系我们",
    "hours_dining_label": "Rokusho | Modern Izakaya",
    "hours_dining_time": "周一至周日 · 17:00–打烊",
    "hours_lunch_label": "Kenko Bento | Lunch Delivery",
    "hours_lunch_time": "周一至周日 · 11:00–13:30",
    "footer_follow": "关注",
    "footer_order_on": "线上订购",
    "footer_directions": "获取路线",
    "footer_reviews": "Google 评价",
    "footer_demo_notice": "本网站目前处于演示阶段，尚未用于商业用途。",
    "footer_copyright": "© 2026 Kenko Bento by Rokusho。保留所有权利。",
    "footer_privacy": "隐私政策 · 条款",
    "lang_switcher_label": "语言"
  }
};
const ITEM_I18N = {
  "chicken-drumstick": {
    "vi": "Đùi gà nướng",
    "ja": "鶏もも肉のグリル",
    "ko": "그릴에 구운 닭다리",
    "zh": "烤鸡腿"
  },
  "chicken-breast": {
    "vi": "Ức gà nướng",
    "ja": "鶏むね肉のグリル",
    "ko": "그릴에 구운 닭가슴살",
    "zh": "烤鸡胸肉"
  },
  "salmon": {
    "vi": "Cá hồi nướng",
    "ja": "サーモンのグリル",
    "ko": "그릴에 구운 연어",
    "zh": "烤三文鱼"
  },
  "beef-belly": {
    "vi": "Ba chỉ bò nướng",
    "ja": "牛バラ肉のグリル",
    "ko": "그릴에 구운 소 삼겹살",
    "zh": "烤牛五花"
  },
  "saba": {
    "vi": "Cá Saba nướng",
    "ja": "サバのグリル",
    "ko": "그릴에 구운 고등어(사바)",
    "zh": "烤鲭鱼（Saba）"
  },
  "cod-fish": {
    "vi": "Cá tuyết nướng",
    "ja": "タラのグリル",
    "ko": "그릴에 구운 대구",
    "zh": "烤鳕鱼"
  },
  "rice-white": {
    "vi": "Cơm Nhật",
    "ja": "白ごはん",
    "ko": "일본식 백미밥",
    "zh": "日式白米饭"
  },
  "rice-brown": {
    "vi": "Cơm gạo lứt",
    "ja": "玄米ごはん",
    "ko": "현미밥",
    "zh": "糙米饭"
  },
  "soba": {
    "vi": "Mì soba",
    "ja": "そば",
    "ko": "소바(메밀국수)",
    "zh": "荞麦面"
  },
  "sweet-corn": {
    "vi": "Bắp Mỹ luộc",
    "ja": "蒸しとうもろこし",
    "ko": "찐 옥수수",
    "zh": "水煮玉米"
  },
  "sweet-potato": {
    "vi": "Khoai lang luộc",
    "ja": "蒸しさつまいも",
    "ko": "찐 고구마",
    "zh": "水煮红薯"
  },
  "mushroom-simmered": {
    "vi": "Nấm kho",
    "ja": "きのこの煮込み",
    "ko": "버섯조림",
    "zh": "炖菇"
  },
  "tomato-grilled": {
    "vi": "Cà chua nướng",
    "ja": "トマトのグリル",
    "ko": "구운 토마토",
    "zh": "烤番茄"
  },
  "mixed-salad": {
    "vi": "Salad theo ngày",
    "ja": "本日のサラダ",
    "ko": "오늘의 샐러드",
    "zh": "每日沙拉"
  },
  "stir-fried-veg": {
    "vi": "Rau xào",
    "ja": "野菜炒め",
    "ko": "야채볶음",
    "zh": "炒时蔬"
  },
  "broccoli": {
    "vi": "Bông cải luộc",
    "ja": "蒸しブロッコリー",
    "ko": "찐 브로콜리",
    "zh": "水煮西兰花"
  },
  "spinach": {
    "vi": "Bó xôi luộc",
    "ja": "蒸しほうれん草",
    "ko": "찐 시금치",
    "zh": "水煮菠菜"
  },
  "carrot": {
    "vi": "Cà rốt hấp",
    "ja": "蒸しにんじん",
    "ko": "찐 당근",
    "zh": "蒸胡萝卜"
  },
  "potato-grilled": {
    "vi": "Khoai tây nướng",
    "ja": "じゃがいものグリル",
    "ko": "구운 감자",
    "zh": "烤土豆"
  },
  "pumpkin-grilled": {
    "vi": "Bí đỏ nướng paprika",
    "ja": "かぼちゃのパプリカグリル",
    "ko": "파프리카 호박구이",
    "zh": "烤南瓜（红椒粉）"
  },
  "sesame-mayo": {
    "vi": "Sốt mè mayo",
    "ja": "ごまマヨソース",
    "ko": "참깨 마요 소스",
    "zh": "芝麻蛋黄酱"
  },
  "shoyu-dressing": {
    "vi": "Sốt trái cây",
    "ja": "醤油フルーツドレッシング",
    "ko": "쇼유 과일 드레싱",
    "zh": "酱油水果酱汁"
  },
  "mentsuyu": {
    "vi": "Sốt mì lạnh (Mentsuyu)",
    "ja": "麺つゆ",
    "ko": "멘츠유(냉소바 소스)",
    "zh": "面露酱汁"
  },
  "soy-sauce": {
    "vi": "Sốt nước tương",
    "ja": "醤油",
    "ko": "간장 소스",
    "zh": "酱油"
  },
  "teriyaki": {
    "vi": "Sốt teriyaki",
    "ja": "照り焼きソース",
    "ko": "데리야키 소스",
    "zh": "照烧酱"
  },
  "sesame-honey": {
    "vi": "Sốt mè rang mật ong",
    "ja": "ごまはちみつドレッシング",
    "ko": "참깨 꿀 드레싱",
    "zh": "芝麻蜂蜜酱汁"
  }
};

let LANG = 'en';
try{
  const saved = localStorage.getItem('rokusho_lang');
  if(saved && I18N[saved]) LANG = saved;
}catch(e){ /* localStorage unavailable — default to English */ }

const LOCALE_MAP = {en:'en-US', vi:'vi-VN', ja:'ja-JP', ko:'ko-KR', zh:'zh-CN'};
const WEEKDAY_INITIALS = {
  en:['S','M','T','W','T','F','S'],
  vi:['CN','T2','T3','T4','T5','T6','T7'],
  ja:['日','月','火','水','木','金','土'],
  ko:['일','월','화','수','목','금','토'],
  zh:['日','一','二','三','四','五','六']
};

function tr_(key){ return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key; }
function currentLocale(){ return LOCALE_MAP[LANG] || 'en-US'; }

// Sheet prices are "exclude VAT & SVC" (see BentoMenuAPI.gs) — the customer-
// facing price adds the in-house 5% service charge and 8% VAT on top.
// Kept as a single multiplier applied only at display time, so every running
// total sums raw base prices first and rounds once, at the end, like kcal.
const PRICE_MULTIPLIER = 1.05 * 1.08;
function fmtPrice(basePrice){
  return Math.round((basePrice||0) * PRICE_MULTIPLIER).toLocaleString('vi-VN') + 'đ';
}
function fmtPriceDelta(basePriceDelta){
  const v = Math.round((basePriceDelta||0) * PRICE_MULTIPLIER);
  return (v>=0?'+':'') + v.toLocaleString('vi-VN') + 'đ';
}
function itemName(item){
  if(LANG==='en') return item.name;
  if(LANG==='vi') return item.name_vi || item.name;
  const tr = ITEM_I18N[item.id];
  return (tr && tr[LANG]) || item.name;
}
function catLabel(cat){ return tr_('tab_'+cat); }

function applyStaticTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = tr_(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.placeholder = tr_(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
    el.setAttribute('aria-label', tr_(el.getAttribute('data-i18n-aria')));
  });
  document.documentElement.lang = LANG;
}

function setLanguage(lang){
  if(!I18N[lang]) return;
  LANG = lang;
  try{ localStorage.setItem('rokusho_lang', lang); }catch(e){}
  applyStaticTranslations();
  renderAll();
  renderPicks();
  renderCartPanel();
}

/* ============================================================
   DATA — ingredient catalogue, loaded from the Rokusho costing
   Google Sheet through a dedicated Apps Script Web App (see
   BentoMenuAPI.gs). Populated by loadMenuAndInit() below;
   empty until that fetch resolves.
   ============================================================ */
const MENU_API_URL = 'https://script.google.com/macros/s/AKfycbydLfOegaXqpnkYO4c_leJAB08JV0fQDEVokN2Xften1Buz_xlOq0drDtlGhE64Qto-/exec';
let DATA = {protein:[], carbs:[], side:[], sauce:[]};

const CATS = ['protein','carbs','side','sauce'];
const CAT_LABEL = {protein:'Protein', carbs:'Carbs', side:'Sides', sauce:'Sauce'};

/* ============================================================
   CHEF'S PICKS — 8 pre-built bentos across 4 collections, built
   entirely from the same ingredient catalogue above (item ids
   reused from DATA) so their nutrition is computed live from
   real ingredient values, never hand-typed.
   Populated by loadMenuAndInit() from the "Chef's Picks" tab via
   BentoMenuAPI.gs; empty until that fetch resolves. Pick ids are
   generated per-group ("pick-high-protein-1", ...), so PICK_I18N
   translations need to be re-added against the new ids.
   ============================================================ */
let PICKS = [];

const GROUP_ORDER = ['special','high-protein','low-carb','balanced','vegetarian'];
const GROUP_META = {
  'special':{label:'Special', desc:'A rotating chef-only creation, outside the everyday four collections.', color:'#7A2E5C', pastelBg:'#F7E9F1'},
  'high-protein':{label:'High-Protein', desc:'Built around a generous protein portion to fuel recovery and keep you full.', color:'#9F2F2D', pastelBg:'#FDEBEC'},
  'low-carb':{label:'Low-Carb', desc:'Lighter on carbs, without skimping on flavour.', color:'#346538', pastelBg:'#EDF3EC'},
  'balanced':{label:'Balanced', desc:'An even split of protein, carbs and healthy fats — an everyday go-to.', color:'#956400', pastelBg:'#FBF3DB'},
  'vegetarian':{label:'Vegetarian', desc:'Meat and seafood free, built around onsen egg for protein.', color:'#1F6C9F', pastelBg:'#E1F3FE'}
};

const PICK_I18N = {};
const GROUP_I18N = {
  'special': {
    vi:{label:'Đặc Biệt', desc:'Món đặc biệt xoay vòng từ đầu bếp, nằm ngoài 4 nhóm thường ngày.'},
    ja:{label:'スペシャル', desc:'日替わりのシェフ特製メニュー、通常の4コレクション以外の一品。'},
    ko:{label:'스페셜', desc:'셰프가 선보이는 로테이션 스페셜 메뉴, 일반 4가지 구성 외의 한 가지입니다.'},
    zh:{label:'主厨特选', desc:'主厨轮换推出的特别菜品，不在日常四大系列之内。'}
  },
  'high-protein': {
    vi:{label:'Giàu Đạm', desc:'Xây dựng quanh khẩu phần đạm dồi dào giúp phục hồi và no lâu.'},
    ja:{label:'高タンパク', desc:'しっかりタンパク質を摂れる、回復と満足感を重視した組み合わせ。'},
    ko:{label:'고단백', desc:'회복을 돕고 든든하게 채워주는 넉넉한 단백질 구성입니다.'},
    zh:{label:'高蛋白', desc:'以充足的蛋白质为核心，帮助恢复体力并保持饱腹感。'}
  },
  'low-carb': {
    vi:{label:'Ít Tinh Bột', desc:'Giảm tinh bột, vẫn giữ trọn hương vị.'},
    ja:{label:'低糖質', desc:'糖質を抑えながら、味わいはそのまま楽しめる組み合わせ。'},
    ko:{label:'저탄수화물', desc:'탄수화물은 줄이고, 맛은 그대로 즐기는 구성입니다.'},
    zh:{label:'低碳水', desc:'降低碳水摄入，风味丝毫不减。'}
  },
  'balanced': {
    vi:{label:'Cân Bằng', desc:'Tỷ lệ đều giữa đạm, tinh bột và chất béo lành mạnh — lựa chọn mỗi ngày.'},
    ja:{label:'バランス', desc:'タンパク質・炭水化物・良質な脂質を均等に — 毎日の定番。'},
    ko:{label:'밸런스', desc:'단백질, 탄수화물, 건강한 지방을 고르게 — 매일 먹기 좋은 구성.'},
    zh:{label:'均衡', desc:'蛋白质、碳水与健康脂肪均衡搭配 —— 日常首选。'}
  },
  'vegetarian': {
    vi:{label:'Chay', desc:'Không thịt, không hải sản, dùng trứng onsen làm nguồn đạm chính.'},
    ja:{label:'ベジタリアン', desc:'肉・魚介不使用、温泉卵をたんぱく源に使用。'},
    ko:{label:'베지테리언', desc:'육류·해산물 없이 온천계란으로 단백질을 채운 구성입니다.'},
    zh:{label:'素食', desc:'不含肉类与海鲜，以温泉蛋作为主要蛋白质来源。'}
  }
};

function pickName(pick){
  const tr = PICK_I18N[pick.id];
  return (LANG!=='en' && tr && tr[LANG] && tr[LANG].name) || pick.name;
}
// Ingredient-list translations now come straight from the "Chef's Picks"
// sheet (VI/JA/KO/ZH columns added next to Ingredient — see BentoMenuAPI.gs),
// rather than the hand-maintained PICK_I18N map, so every pick auto-updates
// instead of needing a matching code entry per id.
function pickTagline(pick){
  const fromSheet = pick['tagline_'+LANG];
  if(LANG!=='en' && fromSheet) return fromSheet;
  const tr = PICK_I18N[pick.id];
  return (LANG!=='en' && tr && tr[LANG] && tr[LANG].tagline) || pick.tagline;
}
function groupLabel(group){
  const tr = GROUP_I18N[group];
  return (LANG!=='en' && tr && tr[LANG] && tr[LANG].label) || GROUP_META[group].label;
}
function groupDesc(group){
  const tr = GROUP_I18N[group];
  return (LANG!=='en' && tr && tr[LANG] && tr[LANG].desc) || GROUP_META[group].desc;
}

// Sheet-authored totals, not a live sum of full-size DATA items: combo
// portions (esp. sides) are scaled down from their standalone serving size,
// so summing full-size ingredient values here would overstate nutrition.
function pickNutrition(pick){
  return {kcal:pick.kcal||0, protein:pick.protein||0, carbs:pick.carbs||0, fat:pick.fat||0, price:pick.price||0};
}

/* ============================================================
   STATE — quantity per item id, flexible across every category
   (mirrors the real Soumaki cart: tap +/- to add any amount)
   ============================================================ */
let qty = {};
function initQtyState(){
  qty = {};
  CATS.forEach(cat => DATA[cat].forEach(it => { qty[it.id] = 0; }));
}

// Note for the bento currently being built in the "view bento" panel —
// entered there (Grab-style "special request" field on the customize step),
// then carried onto the cart line once added; see addCustomBentoToCart().
let customBentoNote = '';

// Like initQtyState, but preserves the customer's current selections for
// items that are still on the menu (used by the background menu refresh).
// `oldNameOf` maps id -> display name from before DATA was overwritten, so
// the caller can tell the customer which selected items just disappeared
// (sold out / deleted) instead of silently zeroing their cart.
function mergeQtyState(oldNameOf){
  const old = qty;
  const allNewIds = new Set(CATS.flatMap(cat => DATA[cat].map(it => it.id)));
  const droppedNames = [];
  Object.keys(old).forEach(id=>{
    if(old[id] > 0 && !allNewIds.has(id) && oldNameOf[id]) droppedNames.push(oldNameOf[id]);
  });

  qty = {};
  CATS.forEach(cat => DATA[cat].forEach(it => { qty[it.id] = old[it.id] || 0; }));
  return droppedNames;
}

function findItem(id){
  for(const cat of CATS){
    const hit = DATA[cat].find(i=>i.id===id);
    if(hit) return {item:hit, cat};
  }
  return null;
}

function computeTotals(){
  const t={kcal:0,protein:0,carbs:0,fat:0,price:0};
  CATS.forEach(cat=>{
    DATA[cat].forEach(it=>{
      const q = qty[it.id];
      if(q>0){ t.kcal+=it.kcal*q; t.protein+=it.protein*q; t.carbs+=it.carbs*q; t.fat+=it.fat*q; t.price+=(it.price||0)*q; }
    });
  });
  return t;
}

function categoryCount(cat){
  return DATA[cat].reduce((sum,it)=>sum+qty[it.id],0);
}

// Soba is only served with mentsuyu (cold noodle dipping sauce) — picking soba
// auto-selects it. Trying to add a different sauce afterwards asks for
// confirmation instead of blocking outright: "Yes" lets the swap happen like
// any normal sauce pick, "No" leaves mentsuyu selected untouched.
const SOBA_SAUCE_LOCK = 'mentsuyu';
function setItemQty(cat, id, newQty){
  newQty = Math.max(0, newQty);
  if(cat==='sauce' && qty['soba']>0 && id!==SOBA_SAUCE_LOCK && newQty>0){
    if(!confirm(tr_('soba_sauce_confirm'))) return;
  }
  const wasSelected = qty[id] > 0;
  qty[id] = newQty;
  if(cat==='carbs' && id==='soba' && !wasSelected && newQty>0){
    DATA.sauce.forEach(it=>{ qty[it.id] = 0; });
    qty[SOBA_SAUCE_LOCK] = 1;
  }
  renderAll();
  if(ingDetailId===id) syncIngredientDetailQty();
}

// Tapping an ingredient card adds one more of it each time — the +/- stepper
// that appears once qty>0 is just a faster way to do the same increment/decrement.
function incrementItem(cat, id){
  setItemQty(cat, id, (qty[id]||0) + 1);
}
function adjustItemQty(cat, id, dir){
  setItemQty(cat, id, (qty[id]||0) + dir);
}

let toastTimer=null;
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('is-shown');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('is-shown'),2200);
}

/* ---------- rendering ---------- */
function cardTemplate(item,cat){
  const q = qty[item.id]||0;
  const selected = q > 0;
  const name = itemName(item);
  const stepperHtml = selected ? `<span class="stepper ing-stepper">
      <button type="button" class="step-btn minus" data-ing-qty="${item.id}" data-ing-cat="${cat}" data-dir="-1" aria-label="Decrease quantity">–</button>
      <span class="step-count">${q}</span>
      <button type="button" class="step-btn plus" data-ing-qty="${item.id}" data-ing-cat="${cat}" data-dir="1" aria-label="Increase quantity">+</button>
    </span>` : '';
  return `<div class="ing-card${selected?' has-qty':''}" data-cat="${cat}" data-id="${item.id}" data-select="${item.id}" data-select-cat="${cat}">
    <span class="ing-media">
      <span class="ing-illustration" role="img" aria-label="${name}">${iconSvg(item.icon)}</span>
    </span>
    <span class="ing-name">${name}</span>
    <span class="ing-price">${fmtPrice(item.price)}</span>
    <span class="ing-kcal">${item.kcal} kcal</span>
    <span class="ing-macros">
      <span class="ing-macro"><b>${item.protein}g</b><small>${tr_('label_protein')}</small></span>
      <span class="ing-macro"><b>${item.carbs}g</b><small>${tr_('label_carbs')}</small></span>
      <span class="ing-macro"><b>${item.fat}g</b><small>${tr_('label_fat')}</small></span>
    </span>
    ${selected ? stepperHtml : `<span class="ing-quickadd" data-ing-quickadd="${item.id}" data-ing-quickadd-cat="${cat}" aria-label="${tr_('add_to_cart_short')}">+</span>`}
  </div>`;
}

function renderGrids(){
  CATS.forEach(cat=>{
    document.getElementById('grid-'+cat).innerHTML = DATA[cat].map(it=>cardTemplate(it,cat)).join('');
  });
  document.getElementById('proteinCount').textContent = categoryCount('protein');
  document.getElementById('carbsCount').textContent = categoryCount('carbs');
  document.getElementById('sideCount').textContent = categoryCount('side');
  document.getElementById('sauceCount').textContent = categoryCount('sauce');
}

function pickCardTemplate(pick){
  const nutri = pickNutrition(pick);
  const meta = GROUP_META[pick.group];
  const name = pickName(pick);
  return `<div class="pick-card" data-pick-id="${pick.id}">
    <div class="pick-media" style="background:${meta.pastelBg}"><img class="pick-media-img" src="${LOGO_MARK_SRC}" alt="${name}"></div>
    <div class="pick-body">
      <div class="pick-name">${name}</div>
      <div class="pick-price">${fmtPrice(nutri.price)}</div>
      <div class="pick-tagline">${pickTagline(pick)}</div>
      <div class="pick-nutrition">
        <span class="pick-macro"><b>${Math.round(nutri.kcal)}</b><small>${tr_('label_kcal')}</small></span>
        <span class="pick-macro"><b>${nutri.protein.toFixed(1)}g</b><small>${tr_('label_protein')}</small></span>
        <span class="pick-macro"><b>${nutri.carbs.toFixed(1)}g</b><small>${tr_('label_carbs')}</small></span>
        <span class="pick-macro"><b>${nutri.fat.toFixed(1)}g</b><small>${tr_('label_fat')}</small></span>
      </div>
    </div>
    <button type="button" class="pick-quickadd" data-pick-quickadd="${pick.id}" aria-label="${tr_('add_to_cart_short')}">+</button>
  </div>`;
}

// Search + group-filter state for the Chef's Picks browser (see renderPicks below).
let pickSearchQuery = '';
let pickGroupFilter = 'all';

function filteredPicks(){
  const q = pickSearchQuery.trim().toLowerCase();
  return PICKS.filter(p=>{
    if(pickGroupFilter!=='all' && p.group!==pickGroupFilter) return false;
    if(!q) return true;
    const hay = [pickName(p), p.name, pickTagline(p), p.tagline].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

function renderPicksChips(){
  const chips = ['all', ...GROUP_ORDER];
  document.getElementById('picksChips').innerHTML = chips.map(g=>{
    const label = g==='all' ? tr_('picks_filter_all') : groupLabel(g);
    return `<button type="button" class="picks-chip${pickGroupFilter===g?' is-active':''}" data-group-filter="${g}">${label}</button>`;
  }).join('');

  // Mobile's compact toolbar mirrors the same filter state via a dropdown
  // (all groups) plus a one-tap Vegetarian shortcut, instead of the
  // full chip row.
  const select = document.getElementById('picksMobileSelect');
  select.innerHTML = chips.map(g=>{
    const label = g==='all' ? tr_('picks_filter_all') : groupLabel(g);
    return `<option value="${g}" ${pickGroupFilter===g?'selected':''}>${label}</option>`;
  }).join('');
  document.getElementById('picksMobileVeg').classList.toggle('is-active', pickGroupFilter==='vegetarian');
}

// Each collection renders as its own horizontally-scrolling row (up to 4
// cards in view at once — see .picks-grid/.pick-card flex-basis), with
// prev/next arrows either side. Groups with no matches (search/filter) are
// simply omitted; an empty overall result shows a "no results" message.
function renderPicks(){
  renderPicksChips();
  const filtered = filteredPicks();
  const groupsWithItems = GROUP_ORDER.filter(g=>filtered.some(p=>p.group===g));
  document.getElementById('picksGrid').innerHTML = groupsWithItems.length ? groupsWithItems.map(g=>{
    const meta = GROUP_META[g];
    const items = filtered.filter(p=>p.group===g);
    return `<div class="picks-group" data-group="${g}">
      <div class="picks-group-head">
        <span class="picks-group-dot" style="background:${meta.color}"></span>
        <div><h3>${groupLabel(g)}</h3><p>${groupDesc(g)}</p></div>
      </div>
      <div class="picks-carousel-wrap">
        <button type="button" class="picks-carousel-arrow prev" data-carousel-prev="${g}" aria-label="Previous">‹</button>
        <div class="card-grid picks-grid" data-carousel="${g}">${items.map(pickCardTemplate).join('')}</div>
        <button type="button" class="picks-carousel-arrow next" data-carousel-next="${g}" aria-label="Next">›</button>
      </div>
    </div>`;
  }).join('') : `<p class="picks-no-results">${tr_('picks_no_results')}</p>`;
  // Deferred a frame: right after innerHTML is set, the new cards haven't been
  // laid out yet, so scrollWidth/clientWidth would still reflect the old (or
  // empty) content and misjudge whether each row actually overflows.
  requestAnimationFrame(()=>{
    document.querySelectorAll('.picks-carousel-wrap').forEach(updateCarouselArrows);
  });
  observePicksGroups();
}

// Mobile's category dropdown auto-follows whichever group is scrolled to —
// separate from picking a value in the dropdown itself (which filters the
// list down to just that group): this only updates what the dropdown
// *shows*, via .value (no 'change' event, so it never triggers a filter).
// Re-run after every renderPicks() since .picks-group elements are
// recreated wholesale each time.
let picksGroupObserver = null;
function observePicksGroups(){
  if(picksGroupObserver) picksGroupObserver.disconnect();
  const groupEls = document.querySelectorAll('.picks-group[data-group]');
  if(!groupEls.length) return;
  picksGroupObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const g = entry.target.getAttribute('data-group');
      const select = document.getElementById('picksMobileSelect');
      if(select && select.value !== g) select.value = g;
      document.getElementById('picksMobileVeg').classList.toggle('is-active', g==='vegetarian');
    });
  }, {rootMargin:'-130px 0px -65% 0px', threshold:0});
  groupEls.forEach(el=>picksGroupObserver.observe(el));
}

function updateCarouselArrows(wrap){
  const track = wrap.querySelector('.picks-grid');
  const prev = wrap.querySelector('.picks-carousel-arrow.prev');
  const next = wrap.querySelector('.picks-carousel-arrow.next');
  if(!track || !prev || !next) return;
  prev.classList.toggle('is-disabled', track.scrollLeft <= 2);
  next.classList.toggle('is-disabled', track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  wrap.classList.toggle('no-overflow', track.scrollWidth <= track.clientWidth + 2);
}

function scrollCarousel(group, dir){
  const track = document.querySelector(`.picks-grid[data-carousel="${group}"]`);
  if(track) track.scrollBy({left: dir*track.clientWidth, behavior:'smooth'});
}

/* ============================================================
   PICK CUSTOMIZATION — swap an ingredient for another in the same
   category, or add extra portions of anything, from inside the bento
   detail popup. Kept separate from `qty`/DATA state above since it's
   scoped to whichever pick the popup currently has open.
   ============================================================ */
let pickCustomState = null;

function initPickCustomState(pick, editCartId){
  const editLine = editCartId ? cart.find(c=>c.cartId===editCartId) : null;
  if(editLine){
    const swaps = {}, addons = {};
    (editLine.changes||[]).forEach(c=>{
      if(c.kind==='swap') swaps[c.origId] = c.newId;
      else if(c.kind==='addon') addons[c.id] = c.qty;
    });
    pickCustomState = {pickId: pick.id, qty: editLine.qty, swaps, addons, note: editLine.note||'', editCartId};
  } else {
    pickCustomState = {pickId: pick.id, qty: 1, swaps: {}, addons: {}, note: '', editCartId: null};
  }
}

// Swaps/add-ons are deltas against the sheet-authored pick totals (see
// pickNutrition above) — computed from full-size DATA ingredient values,
// since that's the only per-ingredient nutrition data available.
function pickCustomExtra(){
  const delta = {kcal:0, protein:0, carbs:0, fat:0, price:0};
  if(!pickCustomState) return delta;
  Object.keys(pickCustomState.swaps).forEach(origId=>{
    const newId = pickCustomState.swaps[origId];
    const oldF = findItem(origId), newF = findItem(newId);
    if(!oldF || !newF) return;
    delta.kcal += newF.item.kcal - oldF.item.kcal;
    delta.protein += newF.item.protein - oldF.item.protein;
    delta.carbs += newF.item.carbs - oldF.item.carbs;
    delta.fat += newF.item.fat - oldF.item.fat;
    delta.price += (newF.item.price||0) - (oldF.item.price||0);
  });
  Object.keys(pickCustomState.addons).forEach(id=>{
    const q = pickCustomState.addons[id];
    if(!q) return;
    const f = findItem(id);
    if(!f) return;
    delta.kcal += f.item.kcal*q;
    delta.protein += f.item.protein*q;
    delta.carbs += f.item.carbs*q;
    delta.fat += f.item.fat*q;
    delta.price += (f.item.price||0)*q;
  });
  return delta;
}

function renderPickCustomTotals(pick){
  const base = pickNutrition(pick);
  const extra = pickCustomExtra();
  const total = {
    kcal: base.kcal+extra.kcal, protein: base.protein+extra.protein,
    carbs: base.carbs+extra.carbs, fat: base.fat+extra.fat, price: base.price+extra.price
  };
  const hasExtra = extra.kcal || extra.protein || extra.carbs || extra.fat;
  document.getElementById('pickModalTotals').innerHTML = `
    <div class="pick-price-total"><b>${fmtPrice(total.price)}</b>${extra.price ? `<span class="price-extra-note">${fmtPriceDelta(extra.price)} ${tr_('pick_customize_extra_note')}</span>` : ''}</div>
    <div class="totals-grid">
      <div class="stat-box"><b>${Math.round(total.kcal)}</b><span>${tr_('label_kcal')}</span></div>
      <div class="stat-box"><b>${total.protein.toFixed(1)}g</b><span>${tr_('label_protein')}</span></div>
      <div class="stat-box"><b>${total.carbs.toFixed(1)}g</b><span>${tr_('label_carbs')}</span></div>
      <div class="stat-box"><b>${total.fat.toFixed(1)}g</b><span>${tr_('label_fat')}</span></div>
    </div>
    ${hasExtra ? `<div class="pick-extra-kcal">${extra.kcal>=0?'+':''}${Math.round(extra.kcal)} ${tr_('label_kcal')} ${tr_('pick_customize_extra_note')}</div>` : ''}`;
}

function renderPickCustomizer(pick){
  const addonsHtml = CATS.map(cat=>{
    const rows = DATA[cat].map(it=>{
      const q = pickCustomState.addons[it.id] || 0;
      return `<div class="pick-addon-row">
        <span class="pick-addon-name">${itemName(it)}</span>
        <span class="pick-addon-kcal">${it.kcal} kcal</span>
        <span class="stepper">
          <button type="button" class="step-btn minus" data-addon-id="${it.id}" data-dir="-1" ${q<=0?'disabled':''} aria-label="Decrease quantity">–</button>
          <span class="step-count">${q}</span>
          <button type="button" class="step-btn plus" data-addon-id="${it.id}" data-dir="1" aria-label="Increase quantity">+</button>
        </span>
      </div>`;
    }).join('');
    return `<div class="pick-addon-group">
      <div class="pick-addon-group-title">${catLabel(cat)}</div>
      ${rows}
    </div>`;
  }).join('');
  document.getElementById('pickModalAddons').innerHTML = `
    <div class="pick-modal-section-title">${tr_('pick_customize_addons')}</div>
    ${addonsHtml}`;

  document.getElementById('pickModalNote').innerHTML = `
    <div class="pick-modal-section-title">${tr_('pick_customize_note')}</div>
    <textarea class="pick-modal-note-input" data-pick-note rows="2" placeholder="${escHtml(tr_('line_note_placeholder'))}">${escHtml(pickCustomState.note||'')}</textarea>`;

  document.getElementById('pickModalQtyCount').textContent = pickCustomState.qty;
  renderPickCustomTotals(pick);
}

function adjustPickAddon(itemId, dir){
  const found = findItem(itemId);
  if(!found) return;
  const next = Math.max(0, (pickCustomState.addons[itemId]||0) + dir);
  if(next<=0) delete pickCustomState.addons[itemId];
  else pickCustomState.addons[itemId] = next;
  const pick = PICKS.find(p=>p.id===pickCustomState.pickId);
  if(!pick) return;
  // The stepper count and disabled state live in this one row only —
  // patch it directly instead of re-rendering the whole add-on list.
  const row = document.querySelector(`.pick-addon-row .step-btn[data-addon-id="${itemId}"]`)?.closest('.pick-addon-row');
  if(row){
    row.querySelector('.step-count').textContent = next;
    row.querySelector('.step-btn.minus').disabled = next<=0;
  }
  renderPickCustomTotals(pick);
}

// Ids are kept on each change entry (not just display names) so an already-
// customized cart line can be re-opened later and have its swap <select>s
// and add-on steppers put back exactly where the customer left them.
function buildPickChanges(){
  const changes = [];
  Object.keys(pickCustomState.swaps).forEach(origId=>{
    const newId = pickCustomState.swaps[origId];
    const oldF = findItem(origId), newF = findItem(newId);
    if(!oldF || !newF) return;
    changes.push({
      kind:'swap', origId, newId, cat:newF.cat,
      fromName:itemName(oldF.item), toName:itemName(newF.item),
      deltaKcal:newF.item.kcal-oldF.item.kcal, deltaProtein:newF.item.protein-oldF.item.protein,
      deltaCarbs:newF.item.carbs-oldF.item.carbs, deltaFat:newF.item.fat-oldF.item.fat,
      deltaPrice:(newF.item.price||0)-(oldF.item.price||0)
    });
  });
  Object.keys(pickCustomState.addons).filter(id=>pickCustomState.addons[id]>0).forEach(id=>{
    const f = findItem(id);
    if(!f) return;
    changes.push({
      kind:'addon', id, cat:f.cat, name:itemName(f.item), qty:pickCustomState.addons[id],
      kcal:f.item.kcal, protein:f.item.protein, carbs:f.item.carbs, fat:f.item.fat, price:f.item.price||0
    });
  });
  return changes;
}

function addCustomizedPickToCart(){
  if(!pickCustomState) return;
  const pick = PICKS.find(p=>p.id===pickCustomState.pickId);
  if(!pick) return;
  const changes = buildPickChanges();
  const qty = pickCustomState.qty;
  const editCartId = pickCustomState.editCartId;

  // Editing an existing cart line: update it in place instead of adding a
  // new one. If every swap/add-on was undone, it reverts to a plain pick.
  if(editCartId){
    const line = cart.find(c=>c.cartId===editCartId);
    if(line){
      if(!changes.length){
        line.type = 'pick';
        delete line.changes;
        delete line.nutrition;
      } else {
        const base = pickNutrition(pick);
        const extra = pickCustomExtra();
        line.type = 'pick-custom';
        line.label = pickName(pick);
        line.changes = changes;
        line.nutrition = {
          kcal: base.kcal+extra.kcal, protein: base.protein+extra.protein,
          carbs: base.carbs+extra.carbs, fat: base.fat+extra.fat, price: base.price+extra.price
        };
      }
      line.qty = qty;
      line.note = pickCustomState.note || '';
      renderCartBadge();
      renderCartPanel();
      showToast(tr_('toast_cart_updated'));
    }
    closePickDetail();
    return;
  }

  if(!changes.length){
    addPickToCart(pick.id, qty, pickCustomState.note || '');
    closePickDetail();
    return;
  }

  const base = pickNutrition(pick);
  const extra = pickCustomExtra();
  cart.push({
    cartId:'pc'+Date.now()+Math.floor(Math.random()*1000),
    type:'pick-custom',
    pickId: pick.id,
    label: pickName(pick),
    changes,
    nutrition: {
      kcal: base.kcal+extra.kcal, protein: base.protein+extra.protein,
      carbs: base.carbs+extra.carbs, fat: base.fat+extra.fat, price: base.price+extra.price
    },
    qty,
    note: pickCustomState.note || '',
    expanded:false
  });
  renderCartBadge();
  showToast(tr_('toast_added'));
  closePickDetail();
}

function openPickDetail(pickId, editCartId){
  const pick = PICKS.find(p=>p.id===pickId);
  if(!pick) return;
  const meta = GROUP_META[pick.group];
  const media = document.getElementById('pickModalMedia');
  media.innerHTML = `<img class="pick-media-img" src="${LOGO_MARK_SRC}" alt="${pickName(pick)}">`;
  media.style.background = meta.pastelBg;
  media.style.color = '';
  const groupEl = document.getElementById('pickModalGroup');
  groupEl.textContent = groupLabel(pick.group);
  groupEl.style.color = meta.color;
  document.getElementById('pickModalName').textContent = pickName(pick);
  document.getElementById('pickModalDesc').textContent = pickTagline(pick);
  initPickCustomState(pick, editCartId);
  renderPickCustomizer(pick);
  document.getElementById('pickModalAddBtn').textContent = editCartId ? tr_('cart_save_changes') : tr_('add_to_cart_short');
  document.getElementById('pickModal').classList.add('is-open');
  document.getElementById('pickModal').setAttribute('aria-hidden','false');
  document.getElementById('pickModalOverlay').classList.add('is-open');
  document.querySelector('.pick-modal-scroll').scrollTop = 0;
  document.body.style.overflow='hidden';
}
function closePickDetail(){
  document.getElementById('pickModal').classList.remove('is-open');
  document.getElementById('pickModal').setAttribute('aria-hidden','true');
  document.getElementById('pickModalOverlay').classList.remove('is-open');
  // Leave scrolling locked if a panel behind this popup is still open —
  // otherwise closing the popup would let the page scroll behind it.
  const cartOpen = document.getElementById('cartPanel').classList.contains('is-open');
  const byoOpen = document.getElementById('bentoPanel').classList.contains('is-open');
  document.body.style.overflow = (cartOpen || byoOpen) ? 'hidden' : '';
  pickCustomState = null;
}

/* ---------- mobile ingredient detail sheet ----------
   On mobile, tapping a build-your-own row opens this instead of adding
   directly — same "tap row -> full-detail bottom sheet" pattern Chef's
   Picks already uses (openPickDetail above), now that the compact row
   layout (see kenko-bento.css @media max-width:760px) drops the macro
   breakdown from the row itself. Desktop keeps the old instant-add tap. */
function isMobileViewport(){
  return window.matchMedia('(max-width:760px)').matches;
}
let ingDetailCat = null, ingDetailId = null;
function openIngredientDetail(cat, id){
  const item = DATA[cat] && DATA[cat].find(it=>it.id===id);
  if(!item) return;
  ingDetailCat = cat;
  ingDetailId = id;
  renderIngredientDetailSheet();
  document.getElementById('ingDetailSheet').classList.add('is-open');
  document.getElementById('ingDetailSheet').setAttribute('aria-hidden','false');
  document.getElementById('ingDetailOverlay').classList.add('is-open');
  document.querySelector('#ingDetailSheet .pick-modal-scroll').scrollTop = 0;
  document.body.style.overflow='hidden';
}
function closeIngredientDetail(){
  document.getElementById('ingDetailSheet').classList.remove('is-open');
  document.getElementById('ingDetailSheet').setAttribute('aria-hidden','true');
  document.getElementById('ingDetailOverlay').classList.remove('is-open');
  const cartOpen = document.getElementById('cartPanel').classList.contains('is-open');
  const byoOpen = document.getElementById('bentoPanel').classList.contains('is-open');
  document.body.style.overflow = (cartOpen || byoOpen) ? 'hidden' : '';
  ingDetailCat = null;
  ingDetailId = null;
}
function renderIngredientDetailSheet(){
  const item = DATA[ingDetailCat].find(it=>it.id===ingDetailId);
  if(!item) return;
  const name = itemName(item);
  const pastel = CAT_PASTEL[ingDetailCat];
  const media = document.getElementById('ingDetailMedia');
  media.innerHTML = `<span class="ing-illustration" role="img" aria-label="${name}">${iconSvg(item.icon)}</span>`;
  media.style.background = pastel.bg;
  media.style.color = pastel.text;
  document.getElementById('ingDetailName').textContent = name;
  document.getElementById('ingDetailPrice').textContent = fmtPrice(item.price);
  document.getElementById('ingDetailMacros').innerHTML = `
    <div class="stat-box"><b>${item.kcal}</b><span>${tr_('label_kcal')}</span></div>
    <div class="stat-box"><b>${item.protein}g</b><span>${tr_('label_protein')}</span></div>
    <div class="stat-box"><b>${item.carbs}g</b><span>${tr_('label_carbs')}</span></div>
    <div class="stat-box"><b>${item.fat}g</b><span>${tr_('label_fat')}</span></div>`;
  // Reuses the existing [data-ing-qty] delegated click handler (same one the
  // card's own inline stepper uses) rather than a separate handler here.
  ['ingDetailMinus','ingDetailPlus'].forEach(btnId=>{
    const btn = document.getElementById(btnId);
    btn.setAttribute('data-ing-qty', item.id);
    btn.setAttribute('data-ing-cat', ingDetailCat);
  });
  syncIngredientDetailQty();
}
// Called from setItemQty whenever the open sheet's own item changes — keeps
// the sheet's stepper in sync whether the change came from its own +/-
// buttons or (rarer) the underlying row re-rendering behind it.
function syncIngredientDetailQty(){
  const q = qty[ingDetailId]||0;
  document.getElementById('ingDetailQty').textContent = q;
  document.getElementById('ingDetailMinus').disabled = q<=0;
}

let lastBentoItemTotal = 0;
let currentView = 'byo';
// The bar only makes sense once there's something to check out, and only
// on the Build Your Own view (Chef's picks has its own floating cart button).
function setBentoBarVisibility(totalItems){
  document.getElementById('bentoBar').style.display = (currentView==='byo' && totalItems>0) ? '' : 'none';
}
function renderStats(){
  const t = computeTotals();
  document.querySelectorAll('.stat-kcal').forEach(el=>el.textContent = Math.round(t.kcal));
  document.querySelectorAll('.stat-protein').forEach(el=>el.textContent = Math.round(t.protein));
  document.querySelectorAll('.stat-carbs').forEach(el=>el.textContent = Math.round(t.carbs));
  document.querySelectorAll('.stat-fat').forEach(el=>el.textContent = Math.round(t.fat));
  document.querySelectorAll('.stat-price').forEach(el=>el.textContent = fmtPrice(t.price));

  const totalItems = CATS.reduce((s,c)=>s+categoryCount(c),0);
  document.getElementById('fabCount').textContent = totalItems;
  setBentoBarVisibility(totalItems);

  if(totalItems > lastBentoItemTotal){
    const fab = document.querySelector('.bento-bar-main');
    fab.classList.remove('is-bumped');
    void fab.offsetWidth; // restart the animation even if it's already mid-run
    fab.classList.add('is-bumped');
  }
  lastBentoItemTotal = totalItems;

  document.querySelectorAll('.step-tab').forEach(tab=>{
    const cat = tab.getAttribute('data-target');
    tab.classList.toggle('is-done', categoryCount(cat) > 0);
  });
}

function lineRow(item, cat){
  const pastel = CAT_PASTEL[cat];
  const q = qty[item.id];
  return `<div class="line-row" data-cat="${cat}">
    <span class="line-badge" style="background:${pastel.bg};color:${pastel.text}">${iconSvg(item.icon)}</span>
    <span class="line-info">
      <span class="line-name">${itemName(item)}</span>
      <span class="line-price">${fmtPrice(item.price*q)}</span>
      <span class="line-kcal">${item.kcal*q} kcal${q>1?` (${item.kcal} × ${q})`:''}</span>
    </span>
    <span class="stepper line-stepper">
      <button type="button" class="step-btn minus" data-ing-qty="${item.id}" data-ing-cat="${cat}" data-dir="-1" aria-label="Decrease quantity">–</button>
      <span class="step-count">${q}</span>
      <button type="button" class="step-btn plus" data-ing-qty="${item.id}" data-ing-cat="${cat}" data-dir="1" aria-label="Increase quantity">+</button>
    </span>
  </div>`;
}

function renderPanel(){
  const body = document.getElementById('panelBody');
  let hasAny = false;

  const groupsHtml = CATS.map(cat=>{
    const items = DATA[cat].filter(it=>qty[it.id]>0);
    if(items.length) hasAny = true;
    return `<div class="panel-group">
      <div class="panel-group-label">${catLabel(cat)}</div>
      ${items.length ? items.map(it=>lineRow(it,cat)).join('') : `<p class="panel-group-empty">${tr_('panel_cat_empty')}</p>`}
    </div>`;
  }).join('');

  const t = computeTotals();
  const totalsHtml = `<div class="panel-price-total"><span>${tr_('cart_subtotal_label')}</span><b>${fmtPrice(t.price)}</b></div>
  <div class="totals-grid">
    <div class="stat-box"><b>${Math.round(t.kcal)}</b><span>${tr_('label_kcal')}</span></div>
    <div class="stat-box"><b>${t.protein.toFixed(1)}g</b><span>${tr_('label_protein')}</span></div>
    <div class="stat-box"><b>${t.carbs.toFixed(1)}g</b><span>${tr_('label_carbs')}</span></div>
    <div class="stat-box"><b>${t.fat.toFixed(1)}g</b><span>${tr_('label_fat')}</span></div>
  </div>`;

  // Note field only makes sense once there's an actual bento to attach it
  // to — hidden while the panel is empty, same as the totals above it.
  const noteHtml = hasAny ? `
    <div class="panel-note">
      <div class="pick-modal-section-title">${tr_('pick_customize_note')}</div>
      <textarea id="panelNoteInput" rows="2" placeholder="${escHtml(tr_('line_note_placeholder'))}">${escHtml(customBentoNote)}</textarea>
    </div>` : '';

  body.innerHTML = groupsHtml + totalsHtml + noteHtml;

  document.getElementById('clearBtn').disabled = !hasAny;
  document.getElementById('downloadBtn').disabled = !hasAny;
  document.getElementById('addToCartBtn').disabled = !hasAny;
}

function renderAll(){
  renderGrids();
  renderStats();
  renderPanel();
}

/* ---------- panel open/close ---------- */
function openPanel(){
  closeCartPanel();
  document.getElementById('bentoPanel').classList.add('is-open');
  document.getElementById('overlay').classList.add('is-open');
  document.getElementById('bentoPanel').setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closePanel(){
  document.getElementById('bentoPanel').classList.remove('is-open');
  document.getElementById('overlay').classList.remove('is-open');
  document.getElementById('bentoPanel').setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

/* ---------- recipe export (rendered receipt -> JPEG via html2canvas) ---------- */
function buildReceiptHtml(){
  const t = computeTotals();
  let groups = '';
  CATS.forEach(cat=>{
    const items = DATA[cat].filter(it=>qty[it.id]>0);
    if(!items.length) return;
    groups += `<div class="r-group-label">${catLabel(cat)}</div>`;
    items.forEach(it=>{
      groups += `<div class="r-line">
        <span class="r-dot" style="background:${CAT_PASTEL[cat].bg}"></span>
        <span style="flex:1">${itemName(it)} ${qty[it.id]>1?('× '+qty[it.id]):''}</span>
        <span>${it.kcal*qty[it.id]} kcal</span>
      </div>`;
    });
  });

  return `<div class="r-pad">
    <div class="r-title">KENKO BENTO BY ROKUSHO SAIGON — ${tr_('panel_your_bento')}</div>
    <div class="r-totals">
      <div class="r-stat"><b>${Math.round(t.kcal)}</b><span>${tr_('label_kcal').toUpperCase()}</span></div>
      <div class="r-stat"><b>${t.protein.toFixed(1)}g</b><span>${tr_('label_protein').toUpperCase()}</span></div>
      <div class="r-stat"><b>${t.carbs.toFixed(1)}g</b><span>${tr_('label_carbs').toUpperCase()}</span></div>
      <div class="r-stat"><b>${t.fat.toFixed(1)}g</b><span>${tr_('label_fat').toUpperCase()}</span></div>
    </div>
    ${groups}
    <div class="r-footer"><span>rokusho.vn</span><span>@rokusho</span></div>
  </div>`;
}

function downloadAsText(){
  const t = computeTotals();
  const lines = ['KENKO BENTO BY ROKUSHO SAIGON',tr_('panel_your_bento'),'--------------------------------------------'];
  CATS.forEach(cat=>{
    const items = DATA[cat].filter(it=>qty[it.id]>0);
    if(items.length){
      lines.push(catLabel(cat)+':');
      items.forEach(it=> lines.push('  '+itemName(it)+(qty[it.id]>1?(' x'+qty[it.id]):'')+' — '+(it.kcal*qty[it.id])+' kcal'));
    }
  });
  lines.push('--------------------------------------------');
  lines.push(`${tr_('label_kcal')}: ${Math.round(t.kcal)} kcal`);
  lines.push(`${tr_('label_protein')}: ${t.protein.toFixed(1)} g`);
  lines.push(`${tr_('label_carbs')}: ${t.carbs.toFixed(1)} g`);
  lines.push(`${tr_('label_fat')}: ${t.fat.toFixed(1)} g`);
  lines.push('');
  lines.push('rokusho.vn');
  const blob = new Blob([lines.join('\n')], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'rokusho-bento.txt';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function downloadRecipe(){
  const btn = document.getElementById('downloadBtn');
  const receipt = document.getElementById('receipt');
  receipt.innerHTML = buildReceiptHtml();

  if(typeof html2canvas !== 'function'){
    downloadAsText();
    return;
  }

  const originalLabel = btn.textContent;
  btn.textContent = 'Preparing…';
  btn.disabled = true;

  html2canvas(receipt, {scale:2, backgroundColor:'#FFFFFF'}).then(canvas=>{
    const link = document.createElement('a');
    link.download = 'rokusho-bento.jpeg';
    link.href = canvas.toDataURL('image/jpeg', 0.92);
    link.click();
    btn.textContent = originalLabel;
    btn.disabled = false;
  }).catch(()=>{
    downloadAsText();
    btn.textContent = originalLabel;
    btn.disabled = false;
  });
}

/* ---------- order confirmation email (rendered receipt -> JPEG -> Apps Script) ---------- */
// Deploy Order-Email.gs as its own Apps Script Web App, then paste the /exec URL here.
const ORDER_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxEUDzjOj0oe-IYKViai4ItRB_UGE-xNoRn_z9m_m1Fxxt7OFfRHKMAXPvR44gRcpH5wg/exec';
// Shared token checked by Order-Email.gs — blocks generic bots/scanners that hit the
// public /exec URL directly without going through this page. Must match WEBHOOK_SECRET
// in Order-Email.gs exactly.
const ORDER_WEBHOOK_SECRET = 'd03c11778b23f17c2581ef397955ca87';

// Simple client-side throttle so repeated confirms (double-tap, fast re-submits)
// can't fire multiple webhook calls in quick succession.
const ORDER_SUBMIT_COOLDOWN_MS = 8000;
let lastOrderSubmitAt = 0;

function buildOrderReceiptHtml(order){
  const titleKey = {Mr:'title_mr', Ms:'title_ms'}[order.contact.title];
  const displayTitle = titleKey ? tr_(titleKey) : order.contact.title;
  let groups = '';
  order.lines.forEach(line=>{
    const lineKcal = Math.round(line.nutrition.kcal * line.qty);
    const linePrice = fmtPrice(line.nutrition.price * line.qty);
    groups += `<div class="r-line">
      <span class="r-thumb"><img src="${LOGO_MARK_SRC}" alt=""></span>
      <span style="flex:1">${line.label} × ${line.qty}</span>
      <span style="text-align:right;">
        <b style="display:block;">${linePrice}</b>
        <small style="display:block;font-size:10px;color:var(--rk-ink-soft);font-weight:400;">${lineKcal} kcal</small>
      </span>
    </div>`;
    if(line.ingredients && line.ingredients.length){
      groups += `<div style="padding:0 0 6px 38px;font-size:11.5px;color:var(--rk-ink-soft);">${line.ingredients.map(ing=>ing.name+' x'+ing.qty).join(', ')}</div>`;
    }
    if(line.note){
      groups += `<div style="padding:0 0 8px 38px;font-size:11.5px;color:var(--rk-primary);font-style:italic;">${tr_('line_note_label')}: ${escHtml(line.note)}</div>`;
    }
  });

  return `<div class="r-pad">
    <div class="r-title">KENKO BENTO BY ROKUSHO SAIGON — ${tr_('order_confirmed_title')}</div>
    <div style="font-family:var(--font-mono);font-size:17px;font-weight:600;letter-spacing:.05em;background:var(--rk-paper-deep);border:1px dashed var(--rk-yuzu);border-radius:10px;padding:12px;margin-bottom:16px;text-align:center;">${order.code}</div>
    <div class="r-group-label">${tr_('order_items')}</div>
    ${groups}
    <div style="display:flex;justify-content:space-between;font-weight:700;font-size:15px;padding:10px 0;border-top:1px solid var(--rk-line);border-bottom:1px solid var(--rk-line);margin:4px 0 14px;">
      <span>${tr_('cart_subtotal_label')}</span><span>${fmtPrice(order.nutrition.price)}</span>
    </div>
    <div class="r-totals">
      <div class="r-stat"><b>${Math.round(order.nutrition.kcal)}</b><span>${tr_('label_kcal').toUpperCase()}</span></div>
      <div class="r-stat"><b>${order.nutrition.protein.toFixed(1)}g</b><span>${tr_('label_protein').toUpperCase()}</span></div>
      <div class="r-stat"><b>${order.nutrition.carbs.toFixed(1)}g</b><span>${tr_('label_carbs').toUpperCase()}</span></div>
      <div class="r-stat"><b>${order.nutrition.fat.toFixed(1)}g</b><span>${tr_('label_fat').toUpperCase()}</span></div>
    </div>
    <div style="font-size:12.5px;color:var(--rk-ink-soft);line-height:1.6;">
      <div>${tr_('order_contact')}: ${displayTitle} ${order.contact.name}, ${order.contact.phone}</div>
      ${order.contact.notes ? `<div>${tr_('order_notes')}: ${order.contact.notes}</div>` : ''}
    </div>
    <div class="r-footer"><span>rokusho.vn</span><span>@rokusho</span></div>
  </div>`;
}

function sendOrderConfirmationEmail(order){
  if(!ORDER_WEBHOOK_URL || ORDER_WEBHOOK_URL.indexOf('PASTE_')===0){
    console.warn('ORDER_WEBHOOK_URL not configured — skipping order confirmation email.');
    return;
  }
  if(typeof html2canvas !== 'function') return;

  const receipt = document.getElementById('receipt');
  receipt.innerHTML = buildOrderReceiptHtml(order);

  const categoryItems = {protein:[], carbs:[], side:[], sauce:[]};
  order.lines.forEach(line=>{
    (line.ingredients||[]).forEach(ing=>{
      if(!categoryItems[ing.cat]) return;
      categoryItems[ing.cat].push(line.qty>1 ? `${ing.name} x${line.qty}` : ing.name);
    });
  });
  const proteinItem = categoryItems.protein.join(' | ');
  const carbsItem = categoryItems.carbs.join(' | ');
  const sideItem = categoryItems.side.join(' | ');
  const sauceItem = categoryItems.sauce.join(' | ');
  const itemsSummary = order.lines.map(l=>`${l.qty}x ${l.label}`).join(', ');
  // Per-bento notes (build-your-own and Chef's Pick alike) — kept separate
  // from itemsSummary/customerNote so the daily items-summary rollup in the
  // order admin can still aggregate by plain dish name.
  const itemNotes = order.lines.filter(l=>l.note).map(l=>`${l.label}: ${l.note}`).join(' | ');

  html2canvas(receipt, {scale:2, backgroundColor:'#FFFFFF'}).then(canvas=>{
    const imageBase64 = canvas.toDataURL('image/jpeg', 0.92);
    fetch(ORDER_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        type: 'order_email',
        secret: ORDER_WEBHOOK_SECRET,
        orderCode: order.code,
        contactTitle: order.contact.title || '',
        contactName: order.contact.name || '',
        contactPhone: order.contact.phone || '',
        customerEmail: order.contact.email || '',
        customerAddress: order.contact.address || '',
        customerNote: order.contact.notes || '',
        deliveryDate: order.dateLabel || '',
        deliverySlot: order.slotLabel || '',
        // Raw ISO date + slot id (still on order.contact — it's a spread of
        // checkoutData taken before checkout resets it), alongside the
        // locale-formatted labels above: dateLabel/slotLabel are rendered
        // via toLocaleDateString in the customer's chosen site language, so
        // they can't be sorted/grouped by day reliably in the order admin.
        deliveryDateIso: order.contact.date || '',
        deliverySlotId: order.contact.slot || '',
        itemCount: order.itemCount,
        itemsSummary: itemsSummary,
        itemNotes: itemNotes,
        proteinItem: proteinItem,
        carbsItem: carbsItem,
        sideItem: sideItem,
        sauceItem: sauceItem,
        kcal: Math.round(order.nutrition.kcal),
        protein: Number(order.nutrition.protein.toFixed(1)),
        carbs: Number(order.nutrition.carbs.toFixed(1)),
        fat: Number(order.nutrition.fat.toFixed(1)),
        imageBase64: imageBase64
      })
    }).catch(err => console.error('Order confirmation email error:', err));
  }).catch(err => console.error('Order receipt render error:', err));
}

/* ============================================================
   CART — holds ordered custom bentos
   (no pricing/payment math — this tracks nutrition only)
   ============================================================ */
const cart = [];

function cartItemCount(){ return cart.reduce((s,l)=>s+l.qty,0); }

function lineNutrition(line){
  if(line.type==='pick'){
    const pick = PICKS.find(p=>p.id===line.pickId);
    return pick ? pickNutrition(pick) : {kcal:0,protein:0,carbs:0,fat:0};
  }
  return line.nutrition;
}

function cartNutritionTotals(){
  const totals = {kcal:0, protein:0, carbs:0, fat:0, price:0};
  cart.forEach(line=>{
    const n = lineNutrition(line);
    if(!n) return;
    totals.kcal += n.kcal*line.qty;
    totals.protein += n.protein*line.qty;
    totals.carbs += n.carbs*line.qty;
    totals.fat += n.fat*line.qty;
    totals.price += (n.price||0)*line.qty;
  });
  return totals;
}

function renderCartBadge(){
  const count = cartItemCount();
  document.getElementById('cartBadge').textContent = count;
  const barBadge = document.getElementById('bentoBarCartBadge');
  if(barBadge) barBadge.textContent = count;
  const floatBadge = document.getElementById('picksFloatCartBadge');
  if(floatBadge) floatBadge.textContent = count;
}

function snapshotCustomBento(){
  const lines = [];
  const totals = {kcal:0, protein:0, carbs:0, fat:0, price:0};
  CATS.forEach(cat=>{
    DATA[cat].forEach(it=>{
      const q = qty[it.id];
      if(q>0){
        lines.push({id:it.id, name:it.name, qty:q, icon:it.icon, cat:cat, kcal:it.kcal, protein:it.protein, carbs:it.carbs, fat:it.fat, price:it.price});
        totals.kcal += it.kcal*q;
        totals.protein += it.protein*q;
        totals.carbs += it.carbs*q;
        totals.fat += it.fat*q;
        totals.price += (it.price||0)*q;
      }
    });
  });
  return {lines, totals};
}

function addCustomBentoToCart(){
  const snap = snapshotCustomBento();
  if(!snap.lines.length) return;
  cart.push({
    cartId:'c'+Date.now()+Math.floor(Math.random()*1000),
    type:'custom',
    label:'__custom__',
    nutrition:snap.totals,
    qty:1,
    lines:snap.lines,
    note:customBentoNote,
    expanded:false
  });
  CATS.forEach(cat=>DATA[cat].forEach(it=>{ qty[it.id]=0; }));
  customBentoNote = '';
  renderAll();
  renderCartBadge();
  showToast(tr_('toast_added'));
  cartStep = 'review';
  openCartPanel();
}

function addPickToCart(pickId, qty, note){
  const pick = PICKS.find(p=>p.id===pickId);
  if(!pick) return;
  const existing = cart.find(c=>c.type==='pick' && c.pickId===pickId);
  if(existing){
    existing.qty += qty;
    if(note) existing.note = note;
  } else {
    cart.push({cartId:'p'+Date.now()+Math.floor(Math.random()*1000), type:'pick', pickId:pick.id, label:pick.name, qty, note:note||'', expanded:false});
  }
  renderCartBadge();
  showToast(tr_('toast_added'));
}

function adjustCartLineQty(cartId, dir){
  const line = cart.find(c=>c.cartId===cartId);
  if(!line) return;
  line.qty += dir;
  if(line.qty<=0){
    cart.splice(cart.indexOf(line),1);
  }
  renderCartBadge();
  renderCartPanel();
}

/* ============================================================
   CHECKOUT — contact info + confirmation
   ============================================================ */
let cartStep = 'review'; // review | datetime | contact | done
let checkoutData = {date:'', dateLabel:'', slot:'', slotLabel:'', phone:'', name:'', title:'Mr', address:'', email:'', notes:''};
let lastOrder = null;
let calendarViewDate = null;

// Looked up by phone number to auto-fill returning customers' details at checkout.
// Empty until wired up to a real customer/order database.
const CUSTOMER_DB = {};

// Delivery window is always 11:00 AM – 1:30 PM, split into 30-minute estimate slots.
const DELIVERY_SLOTS = [
  {id:'11:00', label:'11:00 – 11:30 AM'},
  {id:'11:30', label:'11:30 AM – 12:00 PM'},
  {id:'12:00', label:'12:00 – 12:30 PM'},
  {id:'12:30', label:'12:30 – 1:00 PM'},
  {id:'13:00', label:'1:00 – 1:30 PM'}
];

function earliestAllowedDate(){
  const now = new Date();
  const cutoffPassed = now.getHours() >= 18;
  const offset = cutoffPassed ? 2 : 1;
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()+offset);
}
function isoDate(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function calendarHtml(){
  const earliest = earliestAllowedDate();
  if(!calendarViewDate) calendarViewDate = new Date(earliest.getFullYear(), earliest.getMonth(), 1);
  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const monthLabel = firstDay.toLocaleDateString(currentLocale(),{month:'long', year:'numeric'});
  const isPrevDisabled = (year===earliest.getFullYear() && month===earliest.getMonth());

  let cells = '';
  for(let i=0;i<startWeekday;i++){ cells += `<span class="cal-cell cal-empty"></span>`; }
  for(let d=1; d<=daysInMonth; d++){
    const cellDate = new Date(year, month, d);
    const iso = isoDate(cellDate);
    const isPast = cellDate < new Date(earliest.getFullYear(), earliest.getMonth(), earliest.getDate());
    const isSelected = checkoutData.date === iso;
    const cls = ['cal-cell','cal-day'];
    if(isPast) cls.push('is-disabled');
    if(isSelected) cls.push('is-selected');
    const label = cellDate.toLocaleDateString(currentLocale(),{weekday:'short',month:'short',day:'numeric'});
    cells += `<button type="button" class="${cls.join(' ')}" ${isPast?'disabled':''} data-cal-date="${iso}" data-cal-label="${label}">${d}</button>`;
  }

  return `<div class="cal-head">
    <button type="button" class="cal-nav" id="calPrev" ${isPrevDisabled?'disabled':''} aria-label="Previous month">‹</button>
    <span class="cal-month-label">${monthLabel}</span>
    <button type="button" class="cal-nav" id="calNext" aria-label="Next month">›</button>
  </div>
  <div class="cal-weekdays">${(WEEKDAY_INITIALS[LANG]||WEEKDAY_INITIALS.en).map(w=>`<span>${w}</span>`).join('')}</div>
  <div class="cal-grid">${cells}</div>`;
}

function generateOrderCode(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code='';
  for(let i=0;i<6;i++) code+=chars[Math.floor(Math.random()*chars.length)];
  return 'RKS-'+code;
}

function openCartPanel(){
  closePanel();
  document.getElementById('cartPanel').classList.add('is-open');
  document.getElementById('cartOverlay').classList.add('is-open');
  document.getElementById('cartPanel').setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  renderCartPanel();
}
function closeCartPanel(){
  document.getElementById('cartPanel').classList.remove('is-open');
  document.getElementById('cartOverlay').classList.remove('is-open');
  document.getElementById('cartPanel').setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
function goToCartStep(step){ cartStep = step; renderCartPanel(); }

// Lightweight note-only sheet for build-your-own cart lines — Chef's Pick
// lines reopen their full customize modal instead (see openPickDetail),
// which already has its own note field built in.
let cartNoteCartId = null;
function openCartLineNote(cartId){
  const line = cart.find(c=>c.cartId===cartId);
  if(!line) return;
  cartNoteCartId = cartId;
  document.getElementById('cartNoteInput').value = line.note || '';
  document.getElementById('cartNoteSheet').classList.add('is-open');
  document.getElementById('cartNoteSheet').setAttribute('aria-hidden','false');
  document.getElementById('cartNoteOverlay').classList.add('is-open');
  document.body.style.overflow='hidden';
}
function closeCartLineNote(){
  document.getElementById('cartNoteSheet').classList.remove('is-open');
  document.getElementById('cartNoteSheet').setAttribute('aria-hidden','true');
  document.getElementById('cartNoteOverlay').classList.remove('is-open');
  const cartOpen = document.getElementById('cartPanel').classList.contains('is-open');
  document.body.style.overflow = cartOpen ? 'hidden' : '';
  cartNoteCartId = null;
  renderCartPanel();
}

function cartLineTemplate(line){
  const isPick = line.type==='pick';
  const isPickCustom = line.type==='pick-custom';
  const isEditablePick = isPick || isPickCustom;
  const displayLabel = isPick
    ? (PICKS.find(p=>p.id===line.pickId) ? pickName(PICKS.find(p=>p.id===line.pickId)) : line.label)
    : isPickCustom ? line.label
    : tr_('custom_bento_label');
  const sub = isPick ? tr_('chefs_pick_label')
    : isPickCustom ? tr_('chefs_pick_customized_label')
    : `${line.lines.length} ${tr_(line.lines.length>1?'ingredient_plural':'ingredient_singular')}`;
  const n = lineNutrition(line);
  // Chef's Pick lines (plain or customized) open the full detail popup on
  // click instead of an inline breakdown — only build-your-own bentos still
  // use the old show/hide toggle.
  const canExpand = line.type==='custom';
  let breakdown = '';
  if(canExpand && line.expanded){
    breakdown = `<div class="cart-line-breakdown">${line.lines.map(l=>{
      const found = findItem(l.id);
      const dName = found ? itemName(found.item) : l.name;
      return `<div><span>${dName} x${l.qty}</span><span>${l.kcal*l.qty} kcal</span></div>`;
    }).join('')}</div>`;
  }
  const toggle = canExpand ? `<span class="cart-line-toggle" data-toggle-line="${line.cartId}">${line.expanded?tr_('cart_hide_ing'):tr_('cart_show_ing')}</span>` : '';
  // Every line — build-your-own or Chef's Pick, customized or not — is
  // tappable to open its note in a sheet (kitchen-facing, e.g. "no chili"):
  // Chef's Pick lines reopen the full customize modal (already has a note
  // field), build-your-own lines open a lighter note-only sheet since they
  // have no other detail view to reuse. A small "•" marker after the sub
  // line signals an existing note without showing its text inline.
  const editHint = `<span class="cart-line-toggle">${isEditablePick ? tr_('cart_edit_details') : tr_('cart_add_note')}</span>`;
  const editAttrs = isEditablePick
    ? ` data-cart-edit-pick="${line.pickId}" data-cart-edit-cartid="${line.cartId}"`
    : ` data-cart-edit-note="${line.cartId}"`;
  const noteFlag = line.note ? `<span class="cart-line-note-flag" title="${escHtml(line.note)}">📝</span>` : '';
  return `<div class="cart-line is-editable"${editAttrs}>
    <span class="cart-line-thumb"><img src="${LOGO_MARK_SRC}" alt="${displayLabel}"></span>
    <div class="cart-line-main">
      <div class="cart-line-label">${displayLabel}${noteFlag}</div>
      <div class="cart-line-sub">${sub} · ${Math.round(n.kcal)} kcal</div>
      ${toggle}
      ${editHint}
      ${breakdown}
    </div>
    <div class="cart-line-right">
      <div class="cart-line-price">${fmtPrice(n.price*line.qty)}</div>
      <div class="cart-line-kcal">${Math.round(n.kcal*line.qty)} kcal</div>
      <span class="stepper">
        <button type="button" class="step-btn minus" data-cartline="${line.cartId}" data-dir="-1" aria-label="Decrease quantity">–</button>
        <span class="step-count">${line.qty}</span>
        <button type="button" class="step-btn plus" data-cartline="${line.cartId}" data-dir="1" aria-label="Increase quantity">+</button>
      </span>
    </div>
  </div>`;
}

function renderCartReview(body, footer){
  document.getElementById('cartPanelTitle').textContent = tr_('cart_your_cart');
  document.getElementById('cartStepLabel').textContent = '';
  if(!cart.length){
    body.innerHTML = `<p class="panel-empty">${tr_('cart_empty')}</p>`;
    footer.innerHTML = `<button class="btn btn-solid" disabled>${tr_('cart_continue_delivery')}</button>`;
    return;
  }
  body.innerHTML = cart.map(cartLineTemplate).join('') +
    (()=>{ const n = cartNutritionTotals(); return `
     <div class="cart-summary-row total"><span>${tr_('cart_subtotal_label')}</span><span>${fmtPrice(n.price)}</span></div>
     <p class="checkout-note">${tr_('cart_subtotal_note')}</p>
     <div class="cart-nutrition-title">${tr_('cart_nutrition_total')}</div>
     <div class="totals-grid">
       <div class="stat-box"><b>${Math.round(n.kcal)}</b><span>${tr_('label_kcal')}</span></div>
       <div class="stat-box"><b>${n.protein.toFixed(1)}g</b><span>${tr_('label_protein')}</span></div>
       <div class="stat-box"><b>${n.carbs.toFixed(1)}g</b><span>${tr_('label_carbs')}</span></div>
       <div class="stat-box"><b>${n.fat.toFixed(1)}g</b><span>${tr_('label_fat')}</span></div>
     </div>
     <p class="checkout-note">${tr_('cart_nutrition_note')}</p>`; })();
  footer.innerHTML = `<button class="btn btn-solid" id="cartContinueBtn">${tr_('cart_continue_delivery')}</button>`;
}

function renderCartDatetime(body, footer){
  document.getElementById('cartPanelTitle').textContent = tr_('delivery_time_title');
  document.getElementById('cartStepLabel').textContent = tr_('step2of3');
  if(!checkoutData.date){
    const d = earliestAllowedDate();
    checkoutData.date = isoDate(d);
    checkoutData.dateLabel = d.toLocaleDateString(currentLocale(),{weekday:'short',month:'short',day:'numeric'});
  }
  if(!checkoutData.slot){
    checkoutData.slot = DELIVERY_SLOTS[0].id;
    checkoutData.slotLabel = DELIVERY_SLOTS[0].label;
  }
  const cutoffPassed = new Date().getHours() >= 18;
  const note = cutoffPassed ? tr_('checkout_note_late') : tr_('checkout_note_ontime');

  body.innerHTML = `
    <div class="checkout-note">${note}</div>
    <div class="form-field"><label>${tr_('delivery_date_label')}</label></div>
    <div class="calendar">${calendarHtml()}</div>
    <div class="form-field"><label>${tr_('delivery_slot_label')}</label></div>
    <div class="slot-grid">
      ${DELIVERY_SLOTS.map(s=>`<button type="button" class="date-chip${checkoutData.slot===s.id?' is-selected':''}" data-slot="${s.id}" data-slot-label="${s.label}">${s.label}</button>`).join('')}
    </div>
    <p class="checkout-note">${tr_('checkout_slot_note')}</p>
  `;
  footer.innerHTML = `<div style="display:flex;gap:10px;width:100%">
      <button class="btn btn-ghost" id="cartBackBtn" style="flex:1">${tr_('back_btn')}</button>
      <button class="btn btn-solid" id="cartContinueBtn" style="flex:2">${tr_('continue_details')}</button>
    </div>`;
}

function renderCartContact(body, footer){
  document.getElementById('cartPanelTitle').textContent = tr_('contact_title');
  document.getElementById('cartStepLabel').textContent = tr_('step3of3');
  body.innerHTML = `
    <div class="form-field">
      <label>${tr_('label_phone')}</label>
      <input type="tel" id="ckPhone" placeholder="${tr_('phone_placeholder')}" value="${checkoutData.phone}">
    </div>
    <p class="autofill-note" id="ckAutofillNote" style="display:none">${tr_('autofill_note')}</p>
    <div class="form-row" style="margin-bottom:14px">
      <div class="form-field" style="margin-bottom:0">
        <label>${tr_('label_title_field')}</label>
        <select id="ckTitle">
          <option value="Mr" ${checkoutData.title==='Mr'?'selected':''}>${tr_('title_mr')}</option>
          <option value="Ms" ${checkoutData.title==='Ms'?'selected':''}>${tr_('title_ms')}</option>
        </select>
      </div>
      <div class="form-field" style="margin-bottom:0">
        <label>${tr_('label_fullname')}</label>
        <input type="text" id="ckName" placeholder="${tr_('fullname_placeholder')}" value="${checkoutData.name}">
      </div>
    </div>
    <div class="form-field">
      <label>${tr_('label_address')}</label>
      <div class="ck-address-wrap">
        <textarea id="ckAddress" rows="2" placeholder="${tr_('address_placeholder')}" autocomplete="off">${checkoutData.address}</textarea>
        <div class="ck-address-suggestions" id="ckAddressSuggestions"></div>
      </div>
      <div class="ck-distance" id="ckDistance"></div>
    </div>
    <div class="form-field">
      <label>${tr_('label_email')}</label>
      <input type="email" id="ckEmail" placeholder="${tr_('email_placeholder')}" value="${checkoutData.email}">
    </div>
    <div class="form-field" style="margin-bottom:0">
      <label>${tr_('label_notes')}</label>
      <textarea id="ckNotes" rows="3" placeholder="${tr_('notes_placeholder')}">${checkoutData.notes}</textarea>
    </div>
  `;
  footer.innerHTML = `<div style="display:flex;gap:10px;width:100%">
      <button class="btn btn-ghost" id="cartBackBtn" style="flex:1">${tr_('back_btn')}</button>
      <button class="btn btn-solid" id="cartConfirmBtn" style="flex:2">${tr_('confirm_request')}</button>
    </div>`;
  if(checkoutData.address) scheduleDistanceLookup(checkoutData.address);
}

function escHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Address suggestions as the customer types their delivery address, via
// the same Apps Script deployment (?action=autocomplete, backed by Goong's
// Place Autocomplete). Shorter debounce than the distance lookup below
// since this needs to feel responsive while typing, not just accurate once
// typing stops. Suggestions are kept in a plain array (not baked into the
// DOM as data attributes) so nothing needs HTML-attribute escaping to wire
// a click back to the right one — just an index.
let addressSuggestTimer = null;
let addressSuggestSeq = 0;
let currentAddressSuggestions = [];

function scheduleAddressSuggestions(input){
  clearTimeout(addressSuggestTimer);
  const trimmed = (input||'').trim();
  if(trimmed.length < 4){ renderAddressSuggestions([]); return; }
  addressSuggestTimer = setTimeout(()=>fetchAddressSuggestions(trimmed), 300);
}

function fetchAddressSuggestions(input){
  const seq = ++addressSuggestSeq;
  fetch(MENU_API_URL + '?action=autocomplete&input=' + encodeURIComponent(input))
    .then(res=>res.json())
    .then(data=>{
      if(seq !== addressSuggestSeq) return; // superseded by a newer lookup
      renderAddressSuggestions(data && data.ok ? data.predictions : []);
    })
    .catch(()=>{ if(seq===addressSuggestSeq) renderAddressSuggestions([]); });
}

function renderAddressSuggestions(predictions){
  currentAddressSuggestions = predictions || [];
  const box = document.getElementById('ckAddressSuggestions');
  if(!box) return;
  if(!currentAddressSuggestions.length){
    box.innerHTML = '';
    box.classList.remove('is-open');
    return;
  }
  box.innerHTML = currentAddressSuggestions.map((p,i)=>
    `<button type="button" class="ck-address-suggestion" data-suggest-index="${i}">${escHtml(p.description)}</button>`
  ).join('');
  box.classList.add('is-open');
}

function selectAddressSuggestion(index){
  const picked = currentAddressSuggestions[index];
  if(!picked) return;
  checkoutData.address = picked.description;
  const field = document.getElementById('ckAddress');
  if(field) field.value = picked.description;
  renderAddressSuggestions([]);
  scheduleDistanceLookup(picked.description);
}

// Delivery-distance lookup — calls the same Apps Script deployment as the
// menu API (BentoMenuAPI.gs, ?action=distance, backed by Goong's Distance
// Matrix API) so the map provider's API key stays server-side. Debounced on
// typing, and re-checked whenever the address is
// set programmatically (customer autofill). Best-effort only: any failure
// (bad address, API not configured yet, network hiccup) just clears the
// note rather than blocking checkout — driving distance is a nice-to-have,
// not something the order can be refused over.
let distanceLookupTimer = null;
let distanceLookupSeq = 0;
function scheduleDistanceLookup(address){
  clearTimeout(distanceLookupTimer);
  const trimmed = (address||'').trim();
  if(trimmed.length < 8){ renderDeliveryDistance(null); return; }
  distanceLookupTimer = setTimeout(()=>lookupDeliveryDistance(trimmed), 900);
}

function lookupDeliveryDistance(address){
  const seq = ++distanceLookupSeq;
  renderDeliveryDistance({loading:true});
  fetch(MENU_API_URL + '?action=distance&address=' + encodeURIComponent(address))
    .then(res=>res.json())
    .then(data=>{
      if(seq !== distanceLookupSeq) return; // superseded by a newer lookup
      renderDeliveryDistance(data && data.ok ? {distanceText:data.distanceText, durationText:data.durationText} : {error:true});
    })
    .catch(()=>{ if(seq===distanceLookupSeq) renderDeliveryDistance({error:true}); });
}

function renderDeliveryDistance(state){
  const el = document.getElementById('ckDistance');
  if(!el) return;
  if(!state || state.error){ el.innerHTML = ''; return; }
  if(state.loading){ el.innerHTML = `<span class="ck-distance-loading">${tr_('distance_checking')}</span>`; return; }
  el.innerHTML = `<span class="ck-distance-ok">📍 ${tr_('distance_label')}: <b>${state.distanceText}</b> · ${tr_('distance_duration_prefix')} ${state.durationText}</span>`;
}

function lookupCustomer(phone){
  const clean = phone.replace(/\s+/g,'');
  const hit = CUSTOMER_DB[clean];
  const note = document.getElementById('ckAutofillNote');
  if(hit){
    checkoutData.name = hit.name; checkoutData.title = hit.title;
    checkoutData.address = hit.address; checkoutData.email = hit.email;
    if(document.getElementById('ckName')) document.getElementById('ckName').value = hit.name;
    if(document.getElementById('ckTitle')) document.getElementById('ckTitle').value = hit.title;
    if(document.getElementById('ckAddress')) document.getElementById('ckAddress').value = hit.address;
    if(document.getElementById('ckEmail')) document.getElementById('ckEmail').value = hit.email;
    if(note) note.style.display = 'block';
    scheduleDistanceLookup(hit.address);
  } else if(note){
    note.style.display = 'none';
  }
}

function renderCartDone(body, footer){
  document.getElementById('cartPanelTitle').textContent = tr_('order_confirmed_title');
  document.getElementById('cartStepLabel').textContent = '';
  if(!lastOrder){ body.innerHTML=''; footer.innerHTML=''; return; }
  const doneTitleKey = {Mr:'title_mr', Ms:'title_ms'}[lastOrder.contact.title];
  const doneDisplayTitle = doneTitleKey ? tr_(doneTitleKey) : lastOrder.contact.title;
  const doneGreetName = lastOrder.contact.name ? `${doneDisplayTitle} ${lastOrder.contact.name}` : tr_('order_default_name');
  body.innerHTML = `<div class="order-done">
      <div class="order-done-check"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h4>${tr_('order_done_title')}, ${doneGreetName}!</h4>
      <p>${tr_('order_done_desc')}</p>
      <div class="order-code">${lastOrder.code}</div>
      <p class="order-screenshot-note">${tr_('screenshot_note')}</p>
      <p class="order-followup-note">${tr_('followup_note')}</p>
      <div class="order-items-box">
        ${lastOrder.lines.map(line=>{
          const lineKcal = Math.round(line.nutrition.kcal * line.qty);
          const sub = (line.ingredients && line.ingredients.length)
            ? `<div class="order-item-sub">${line.ingredients.map(ing=>ing.name+' x'+ing.qty).join(', ')}</div>`
            : '';
          const linePrice = fmtPrice(line.nutrition.price * line.qty);
          return `<div class="order-item-row">
            <span class="order-item-thumb"><img src="${LOGO_MARK_SRC}" alt="${line.label}"></span>
            <div class="order-item-body">
              <div class="order-item-main"><span>${line.label} × ${line.qty}</span><b>${linePrice}</b></div>
              <div class="order-item-sub">${lineKcal} kcal</div>
              ${sub}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="order-summary">
        <div><span>${tr_('cart_subtotal_label')}</span><b>${fmtPrice(lastOrder.nutrition.price)}</b></div>
        <div><span>${tr_('order_items')}</span><b>${lastOrder.itemCount}</b></div>
        <div><span>${tr_('order_delivery')}</span><b>${lastOrder.dateLabel}, ${lastOrder.slotLabel}</b></div>
        <div><span>${tr_('order_contact')}</span><b>${doneDisplayTitle} ${lastOrder.contact.name}, ${lastOrder.contact.phone}</b></div>
        <div><span>${tr_('order_address')}</span><b>${lastOrder.contact.address}</b></div>
        <div><span>${tr_('order_nutrition_total')}</span><b>${Math.round(lastOrder.nutrition.kcal)} kcal · ${lastOrder.nutrition.protein.toFixed(1)}g ${tr_('label_protein')} · ${lastOrder.nutrition.carbs.toFixed(1)}g ${tr_('label_carbs')} · ${lastOrder.nutrition.fat.toFixed(1)}g ${tr_('label_fat')}</b></div>
        ${lastOrder.contact.notes ? `<div><span>${tr_('order_notes')}</span><b>${lastOrder.contact.notes}</b></div>` : ''}
      </div>
    </div>`;
  footer.innerHTML = `<button class="btn btn-solid" id="cartNewOrderBtn">${tr_('new_order_btn')}</button>`;
}

function renderCartPanel(){
  const body = document.getElementById('cartPanelBody');
  const footer = document.getElementById('cartPanelFooter');
  if(cartStep==='review') renderCartReview(body,footer);
  else if(cartStep==='datetime') renderCartDatetime(body,footer);
  else if(cartStep==='contact') renderCartContact(body,footer);
  else if(cartStep==='done') renderCartDone(body,footer);
}

function syncContactFields(){
  const get = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  if(document.getElementById('ckPhone')) checkoutData.phone = get('ckPhone');
  if(document.getElementById('ckName')) checkoutData.name = get('ckName');
  if(document.getElementById('ckTitle')) checkoutData.title = get('ckTitle') || 'Mr';
  if(document.getElementById('ckAddress')) checkoutData.address = get('ckAddress');
  if(document.getElementById('ckEmail')) checkoutData.email = get('ckEmail');
  if(document.getElementById('ckNotes')) checkoutData.notes = get('ckNotes');
}

function snapshotCartLines(){
  return cart.map(line=>{
    const note = line.note || '';
    if(line.type==='pick'){
      const pick = PICKS.find(p=>p.id===line.pickId);
      const label = pick ? pickName(pick) : line.label;
      return {type: line.type, label, qty: line.qty, nutrition: lineNutrition(line), ingredients: null, note};
    }
    if(line.type==='pick-custom'){
      const ingredients = line.changes.map(c=>{
        if(c.kind==='swap') return {name: `${c.toName} (${tr_('cart_swap_replaces')} ${c.fromName})`, qty:1, cat:c.cat};
        return {name: c.name, qty: c.qty, cat: c.cat};
      });
      return {type: line.type, label: line.label, qty: line.qty, nutrition: lineNutrition(line), ingredients, note};
    }
    const ingredients = line.lines.map(l=>{
      const found = findItem(l.id);
      return {name: found ? itemName(found.item) : l.name, qty: l.qty, cat: found ? found.cat : l.cat};
    });
    return {type: line.type, label: tr_('custom_bento_label'), qty: line.qty, nutrition: lineNutrition(line), ingredients, note};
  });
}

function confirmOrder(){
  syncContactFields();
  if(!checkoutData.phone || !checkoutData.name || !checkoutData.address){
    showToast(tr_('toast_fill_fields'));
    return;
  }
  const now = Date.now();
  if(now - lastOrderSubmitAt < ORDER_SUBMIT_COOLDOWN_MS){
    showToast(tr_('toast_slow_down'));
    return;
  }
  lastOrderSubmitAt = now;
  lastOrder = {
    code: generateOrderCode(),
    itemCount: cartItemCount(),
    nutrition: cartNutritionTotals(),
    dateLabel: checkoutData.dateLabel,
    slotLabel: checkoutData.slotLabel,
    contact: {...checkoutData},
    lines: snapshotCartLines()
  };
  cart.length = 0;
  renderCartBadge();
  checkoutData.date=''; checkoutData.dateLabel=''; checkoutData.slot=''; checkoutData.slotLabel='';
  calendarViewDate = null;
  cartStep = 'done';
  renderCartPanel();
  sendOrderConfirmationEmail(lastOrder);
}
function startNewOrder(){
  cartStep = 'review';
  lastOrder = null;
  closeCartPanel();
}

/* ---------- view switching (Build your own / Chef's picks) ---------- */
function switchView(view){
  currentView = view;
  document.querySelectorAll('.mode-pill').forEach(p=>p.classList.toggle('is-active', p.getAttribute('data-view')===view));
  document.getElementById('byoView').style.display = view==='byo' ? '' : 'none';
  document.getElementById('picksView').style.display = view==='picks' ? '' : 'none';
  setBentoBarVisibility(CATS.reduce((s,c)=>s+categoryCount(c),0));
  // The picks carousels were first measured while this view was display:none
  // (everything reads 0 in a hidden subtree), so their overflow/arrow state
  // needs a fresh measurement now that real layout is available.
  if(view==='picks'){
    requestAnimationFrame(()=>{
      document.querySelectorAll('.picks-carousel-wrap').forEach(updateCarouselArrows);
    });
  }
  updatePicksFloatCart();
}

// Chef's Picks has no floating "view bento" bar (that's the build-your-own
// running total), so a quick way back to the cart only appears once the
// customer has scrolled past the hero/toolbar — otherwise it'd just sit on
// top of content that's already in view.
function updatePicksFloatCart(){
  const btn = document.getElementById('picksFloatCart');
  if(!btn) return;
  const inPicksView = document.getElementById('picksView').style.display !== 'none';
  btn.classList.toggle('is-visible', inPicksView && window.scrollY > 220);
}
let picksFloatCartTicking = false;
window.addEventListener('scroll', ()=>{
  if(picksFloatCartTicking) return;
  picksFloatCartTicking = true;
  requestAnimationFrame(()=>{ updatePicksFloatCart(); picksFloatCartTicking = false; });
}, {passive:true});

/* ---------- events ---------- */
document.addEventListener('click', e=>{
  // Close the address-suggestion dropdown on any click outside it, without
  // otherwise interrupting whatever else this click is meant to do.
  if(currentAddressSuggestions.length && !e.target.closest('.ck-address-wrap')){
    renderAddressSuggestions([]);
  }
  const addressSuggestBtn = e.target.closest('.ck-address-suggestion');
  if(addressSuggestBtn){
    selectAddressSuggestion(parseInt(addressSuggestBtn.getAttribute('data-suggest-index'),10));
    return;
  }
  const ingStepBtn = e.target.closest('[data-ing-qty]');
  if(ingStepBtn){
    const dir = parseInt(ingStepBtn.getAttribute('data-dir'),10);
    adjustItemQty(ingStepBtn.getAttribute('data-ing-cat'), ingStepBtn.getAttribute('data-ing-qty'), dir);
    return;
  }
  const addonBtn = e.target.closest('[data-addon-id]');
  if(addonBtn){
    adjustPickAddon(addonBtn.getAttribute('data-addon-id'), parseInt(addonBtn.getAttribute('data-dir'),10));
    return;
  }
  const pmQtyBtn = e.target.closest('[data-pickmodal-qty-dir]');
  if(pmQtyBtn && pickCustomState){
    pickCustomState.qty = Math.max(1, pickCustomState.qty + parseInt(pmQtyBtn.getAttribute('data-pickmodal-qty-dir'),10));
    document.getElementById('pickModalQtyCount').textContent = pickCustomState.qty;
    return;
  }
  if(e.target.id==='pickModalAddBtn'){ addCustomizedPickToCart(); return; }
  // Mobile row's quick-add "+" — bumps quantity straight away, checked
  // before the whole-card handler below so it doesn't also open the detail
  // sheet (same pattern as the Chef's Pick quick-add).
  const ingQuickadd = e.target.closest('[data-ing-quickadd]');
  if(ingQuickadd){ incrementItem(ingQuickadd.getAttribute('data-ing-quickadd-cat'), ingQuickadd.getAttribute('data-ing-quickadd')); return; }
  const selectBtn = e.target.closest('[data-select]');
  if(selectBtn){
    const cat = selectBtn.getAttribute('data-select-cat'), id = selectBtn.getAttribute('data-select');
    // Mobile: tapping a row opens the full-detail sheet instead of adding
    // straight away (its own stepper — caught by [data-ing-qty] above —
    // still adjusts instantly). Desktop keeps the original tap-to-add.
    if(isMobileViewport()) openIngredientDetail(cat, id);
    else incrementItem(cat, id);
    return;
  }
  if(e.target.closest('[data-retry-menu]')){
    loadMenuAndInit();
    return;
  }
  const stepBtn = e.target.closest('.step-btn');
  if(stepBtn){
    const dir = parseInt(stepBtn.getAttribute('data-dir'),10);
    if(stepBtn.hasAttribute('data-cartline')){
      adjustCartLineQty(stepBtn.getAttribute('data-cartline'), dir);
    }
    return;
  }
  if(e.target.id==='bentoFab' || e.target.closest('#bentoFab')){ openPanel(); return; }
  if(e.target.id==='panelClose' || e.target.id==='overlay'){ closePanel(); return; }
  if(e.target.id==='clearBtn'){
    if(document.getElementById('clearBtn').disabled) return;
    CATS.forEach(cat=>DATA[cat].forEach(it=>{ qty[it.id]=0; }));
    renderAll();
    return;
  }
  if(e.target.id==='downloadBtn'){
    if(!document.getElementById('downloadBtn').disabled) downloadRecipe();
    return;
  }
  if(e.target.id==='addToCartBtn'){
    if(!document.getElementById('addToCartBtn').disabled) addCustomBentoToCart();
    return;
  }

  // Mobile's Vegetarian shortcut toggles on/off, unlike the chips/dropdown
  // (which just set whichever filter was clicked) — tapping it again drops
  // back to "all" instead of being stuck on Vegetarian with no quick way out.
  if(e.target.closest('#picksMobileVeg')){
    pickGroupFilter = pickGroupFilter==='vegetarian' ? 'all' : 'vegetarian';
    renderPicks();
    return;
  }

  const groupChip = e.target.closest('[data-group-filter]');
  if(groupChip){ pickGroupFilter = groupChip.getAttribute('data-group-filter'); renderPicks(); return; }

  if(e.target.id==='picksMobileSearchBtn' || e.target.closest('#picksMobileSearchBtn')){
    const row = document.getElementById('picksMobileSearchRow');
    const nowOpen = row.classList.toggle('is-open');
    if(nowOpen) document.getElementById('picksSearchMobile').focus();
    else { document.getElementById('picksSearchMobile').value = ''; pickSearchQuery = ''; renderPicks(); }
    return;
  }

  const carPrev = e.target.closest('[data-carousel-prev]');
  if(carPrev){ scrollCarousel(carPrev.getAttribute('data-carousel-prev'), -1); return; }
  const carNext = e.target.closest('[data-carousel-next]');
  if(carNext){ scrollCarousel(carNext.getAttribute('data-carousel-next'), 1); return; }

  // Mobile row's quick-add "+" (see .pick-quickadd in kenko-bento.css) —
  // adds the plain pick straight away, checked before the whole-card click
  // below so it doesn't also pop the detail sheet open.
  const pickQuickadd = e.target.closest('[data-pick-quickadd]');
  if(pickQuickadd){ addPickToCart(pickQuickadd.getAttribute('data-pick-quickadd'), 1); return; }

  // Clicking anywhere else on a pick card opens its detail popup — this runs
  // after the stepper/add-to-cart checks above, which already return early,
  // so clicks on those controls never reach here.
  const pickCardEl = e.target.closest('.pick-card');
  if(pickCardEl){ openPickDetail(pickCardEl.getAttribute('data-pick-id')); return; }

  if(e.target.id==='pickModalClose' || e.target.id==='pickModalOverlay'){ closePickDetail(); return; }
  if(e.target.id==='ingDetailClose' || e.target.id==='ingDetailOverlay' || e.target.id==='ingDetailDoneBtn'){ closeIngredientDetail(); return; }

  const modePill = e.target.closest('.mode-pill');
  if(modePill){ switchView(modePill.getAttribute('data-view')); return; }

  if(e.target.id==='cartBtn' || e.target.closest('#cartBtn') || e.target.id==='bentoBarCartBtn' || e.target.closest('#bentoBarCartBtn') || e.target.id==='picksFloatCart' || e.target.closest('#picksFloatCart')){ openCartPanel(); return; }
  if(e.target.id==='cartPanelClose' || e.target.id==='cartOverlay'){ closeCartPanel(); return; }

  const lineToggle = e.target.closest('[data-toggle-line]');
  if(lineToggle){
    const line = cart.find(c=>c.cartId===lineToggle.getAttribute('data-toggle-line'));
    if(line){ line.expanded = !line.expanded; renderCartPanel(); }
    return;
  }

  // Clicking a Chef's Pick cart line (plain or already customized) opens the
  // same detail popup used to build one, pre-filled with its current swaps/
  // add-ons so it can be reviewed or edited further.
  const cartEditPick = e.target.closest('.cart-line[data-cart-edit-pick]');
  if(cartEditPick){
    openPickDetail(cartEditPick.getAttribute('data-cart-edit-pick'), cartEditPick.getAttribute('data-cart-edit-cartid'));
    return;
  }
  // Build-your-own cart lines have no other detail view to reuse, so they
  // get a lighter note-only sheet instead.
  const cartEditNote = e.target.closest('.cart-line[data-cart-edit-note]');
  if(cartEditNote){
    openCartLineNote(cartEditNote.getAttribute('data-cart-edit-note'));
    return;
  }
  if(e.target.id==='cartNoteClose' || e.target.id==='cartNoteOverlay' || e.target.id==='cartNoteDoneBtn'){ closeCartLineNote(); return; }

  if(e.target.id==='calPrev'){ calendarViewDate.setMonth(calendarViewDate.getMonth()-1); renderCartPanel(); return; }
  if(e.target.id==='calNext'){ calendarViewDate.setMonth(calendarViewDate.getMonth()+1); renderCartPanel(); return; }

  const calDay = e.target.closest('[data-cal-date]');
  if(calDay && !calDay.disabled){
    checkoutData.date = calDay.getAttribute('data-cal-date');
    checkoutData.dateLabel = calDay.getAttribute('data-cal-label');
    renderCartPanel();
    return;
  }

  const slotChip = e.target.closest('[data-slot]');
  if(slotChip){
    checkoutData.slot = slotChip.getAttribute('data-slot');
    checkoutData.slotLabel = slotChip.getAttribute('data-slot-label');
    renderCartPanel();
    return;
  }

  if(e.target.id==='cartContinueBtn'){
    if(cartStep==='review') goToCartStep('datetime');
    else if(cartStep==='datetime') goToCartStep('contact');
    return;
  }
  if(e.target.id==='cartBackBtn'){
    if(cartStep==='datetime') goToCartStep('review');
    else if(cartStep==='contact'){ syncContactFields(); goToCartStep('datetime'); }
    return;
  }
  if(e.target.id==='cartConfirmBtn'){ confirmOrder(); return; }
  if(e.target.id==='cartNewOrderBtn'){ startNewOrder(); return; }
});

document.addEventListener('focusout', e=>{
  if(e.target && e.target.id==='ckPhone') lookupCustomer(e.target.value);
});

document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ closePanel(); closeCartPanel(); closePickDetail(); }
});

document.addEventListener('change', e=>{
  if(e.target && e.target.id==='langSelect'){ setLanguage(e.target.value); return; }
  if(e.target && e.target.id==='picksMobileSelect'){ pickGroupFilter = e.target.value; renderPicks(); return; }
});

document.addEventListener('input', e=>{
  if(e.target && e.target.id==='picksSearch'){ pickSearchQuery = e.target.value; renderPicks(); }
  if(e.target && e.target.id==='picksSearchMobile'){ pickSearchQuery = e.target.value; renderPicks(); }
  if(e.target && e.target.id==='ckAddress'){ scheduleDistanceLookup(e.target.value); scheduleAddressSuggestions(e.target.value); }
  // Cart line note sheet — updates the line directly, same reasoning as
  // above (no re-render mid-typing).
  if(e.target && e.target.id==='cartNoteInput' && cartNoteCartId){
    const line = cart.find(c=>c.cartId===cartNoteCartId);
    if(line) line.note = e.target.value;
  }
  // Build-your-own "view bento" panel note — held on customBentoNote until
  // Add to cart, same reasoning as above (no re-render mid-typing).
  if(e.target && e.target.id==='panelNoteInput'){ customBentoNote = e.target.value; }
  // Chef's Pick modal note — held on pickCustomState until Add to cart /
  // Save changes.
  if(e.target && e.target.hasAttribute && e.target.hasAttribute('data-pick-note') && pickCustomState){
    pickCustomState.note = e.target.value;
  }
});

// Scroll events don't bubble, but a capturing listener on document still sees
// them fire on their way down to the target — used here to keep each
// carousel's prev/next arrows in sync with its scroll position.
document.addEventListener('scroll', e=>{
  const track = e.target && e.target.closest && e.target.closest('.picks-grid');
  if(track){ const wrap = track.closest('.picks-carousel-wrap'); if(wrap) updateCarouselArrows(wrap); }
}, true);

window.addEventListener('resize', ()=>{
  document.querySelectorAll('.picks-carousel-wrap').forEach(updateCarouselArrows);
});

/* ---------- messenger: try opening the native app before falling back to web ---------- */
(function(){
  const btn = document.querySelector('.quick-action-messenger');
  if(!btn) return;
  const pageId = '1041737169016337';
  const webUrl = 'https://m.me/' + pageId;
  const appUrl = 'fb-messenger://user-thread/' + pageId;
  btn.addEventListener('click', function(e){
    e.preventDefault();
    let leftPage = false;
    const onHide = ()=>{ leftPage = true; };
    document.addEventListener('visibilitychange', onHide, {once:true});
    window.location.href = appUrl;
    setTimeout(()=>{
      document.removeEventListener('visibilitychange', onHide);
      if(!leftPage) window.open(webUrl, '_blank', 'noopener');
    }, 900);
  });
})();

/* ---------- scrollspy ---------- */
const sections = CATS.map(id=>document.getElementById(id));
const tabs = document.querySelectorAll('.step-tab');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      tabs.forEach(t=>t.classList.toggle('is-active', t.getAttribute('data-target')===entry.target.id));
    }
  });
}, {rootMargin:'-40% 0px -50% 0px', threshold:0});
sections.forEach(s=>observer.observe(s));

/* ---------- init ---------- */
document.getElementById('langSelect').value = LANG;
applyStaticTranslations();
loadMenuAndInit();

// Fetches the ingredient catalogue from the Apps Script menu API (BentoMenuAPI.gs)
// backed by the Rokusho costing Google Sheet, then boots the rest of the app —
// everything below reads DATA, so nothing else can render until this resolves.
let lastMenuJsonText = null;
function loadMenuAndInit(){
  document.querySelectorAll('.menu-load-error').forEach(el=>el.remove());
  fetch(MENU_API_URL)
    .then(res=>res.text())
    .then(text=>{
      lastMenuJsonText = text;
      const menu = JSON.parse(text);
      DATA = {protein:menu.protein||[], carbs:menu.carbs||[], side:menu.side||[], sauce:menu.sauce||[]};
      PICKS = menu.picks || [];
      initQtyState();
      renderAll();
      renderPicks();
      renderCartBadge();
      startMenuPolling();
    })
    .catch(err=>{
      console.error('Failed to load menu data:', err);
      showMenuLoadError();
    })
    .finally(()=>window.dispatchEvent(new Event('rk:menu-ready')));
}

function showMenuLoadError(){
  document.querySelectorAll('.card-grid').forEach(grid=>{
    grid.innerHTML = `<p class="menu-load-error">${tr_('menu_load_error')}
      <button type="button" class="menu-retry-btn" data-retry-menu>${tr_('menu_load_retry')}</button></p>`;
  });
}

// Polls the same menu API in the background so changes made in the admin
// panel (add/edit/delete/toggle sold-out) show up here without the customer
// reloading. Only re-renders when the response actually changed, and only
// while the tab is visible — plus an immediate catch-up refresh whenever
// the tab regains focus, in case it was backgrounded past several intervals.
const MENU_POLL_INTERVAL_MS = 20000;
let menuPollTimer = null;

function startMenuPolling(){
  if(menuPollTimer) return;
  menuPollTimer = setInterval(()=>{
    if(document.visibilityState === 'visible') refreshMenu();
  }, MENU_POLL_INTERVAL_MS);
}

document.addEventListener('visibilitychange', ()=>{
  if(document.visibilityState === 'visible' && lastMenuJsonText) refreshMenu();
});

function refreshMenu(){
  fetch(MENU_API_URL)
    .then(res=>res.text())
    .then(text=>{
      if(text === lastMenuJsonText) return;
      lastMenuJsonText = text;
      applyMenuUpdate(JSON.parse(text));
    })
    .catch(err=>console.error('Background menu refresh failed:', err));
}

// Swaps in freshly-fetched menu data without disturbing the customer's
// current picks: quantities are preserved for ids that still exist, and
// only ids that disappeared (sold out / deleted) get zeroed — with a toast
// so that isn't silent.
function applyMenuUpdate(menu){
  const oldNameOf = {};
  CATS.forEach(cat => DATA[cat].forEach(it => { oldNameOf[it.id] = itemName(it); }));

  DATA = {protein:menu.protein||[], carbs:menu.carbs||[], side:menu.side||[], sauce:menu.sauce||[]};
  PICKS = menu.picks || [];

  const droppedNames = mergeQtyState(oldNameOf);

  renderAll();
  renderPicks();
  renderCartBadge();

  if(droppedNames.length) showToast(tr_('toast_menu_updated_items_removed'));
}

/* ---------- page loader ---------- */
(function(){
  const loader = document.getElementById('pageLoader');
  if(!loader) return;
  const shownAt = Date.now();
  const MIN_VISIBLE_MS = 550;
  function hideLoader(){
    const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt));
    setTimeout(()=>{
      loader.classList.add('is-hidden');
      loader.addEventListener('transitionend', ()=>loader.remove(), {once:true});
    }, wait);
  }
  window.addEventListener('rk:menu-ready', hideLoader, {once:true});
})();

