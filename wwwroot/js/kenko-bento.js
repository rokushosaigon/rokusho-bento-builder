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

// Resolves a sheet "Image" cell to a usable src: a full URL is used as-is, a
// bare filename is looked up under img/, and an empty cell falls back to the
// logo placeholder. See itemImg use in pickCardTemplate / openPickDetail.
function itemImg(image){
  const v = String(image || '').trim();
  if(!v) return LOGO_MARK_SRC;
  if(/^https?:\/\//i.test(v)) return v;
  // Sheet filenames can contain spaces and "#" (e.g. "High-Protein Bento
  // #1.png") — encode so the URL stays valid; the file on disk keeps the
  // literal name.
  return 'img/' + encodeURIComponent(v);
}

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
    "nav_contact": "Contact",
    "intro_scroll_skip": "Tap the screen to skip",
    "contact_sheet_title": "Contact us",
    "contact_call": "Call",
    "checkout_note_preorder": "Pre-order only: please order at least 1 hour before your selected time.",
    "added_sheet_title": "Added to cart",
    "added_add_more": "Add more bento",
    "added_go_cart": "Go to cart",
    "mode_byo": "Build your own",
    "mode_picks": "Chef's picks",
    "mixmatch_card_title": "Your Bento",
    "mixmatch_card_desc": "Pick your ingredients to fit your taste and needs",
    "brand_intro_desc": "Japanese-style healthy bento — build your own or pick a chef's set, delivered fresh.",
    "byo_back": "Menu",
    "picks_eyebrow": "Ready in one tap",
    "picks_title": "Chef's picks",
    "picks_desc": "House bentos across four collections — pick a quantity and send it straight to your cart.",
    "picks_search_placeholder": "Search bentos…",
    "picks_filter_all": "All",
    "picks_veg_quick": "Recommend",
    "picks_group_sheet_title": "Choose a collection",
    "picks_no_results": "No bentos match your search.",
    "add_to_cart_short": "Add to cart",
    "ing_detail_done": "Done",
    "chefs_pick_label": "Chef's pick",
    "chefs_pick_customized_label": "Chef's pick · Customized",
    "pick_customize_addons": "Add extra",
    "pick_customize_note": "Note",
    "pick_customize_extra_note": "from customization",
    "cart_swap_replaces": "instead of",
    "cart_continue_delivery": "Continue",
    "delivery_time_title": "Delivery time",
    "step2of3": "Step 2 of 3",
    "step3of3": "Step 3 of 3",
    "checkout_note_late": "It's past 6:00 PM, so the earliest available delivery date is in 2 days. Orders placed before 6:00 PM can get next-day delivery.",
    "checkout_note_ontime": "Order before 6:00 PM today for tomorrow's delivery. Any date further out is always available, with no cutoff.",
    "delivery_date_label": "Delivery date",
    "delivery_slot_label": "Delivery time slot",
    "checkout_slot_note": "Times are an estimate — our rider will arrive within the selected 30-minute window, every day from 11:00 AM to 1:30 PM.",
    "order_type_pickup": "Pickup",
    "pickup_time_title": "Pickup time",
    "pickup_date_label": "Pickup date",
    "pickup_slot_label": "Pickup time slot",
    "checkout_pickup_slot_note": "Please arrive within your selected 15-minute window, every day from 11:00 AM to 1:30 PM.",
    "pickup_location_label": "Pickup location",
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
    "cart_nutrition_note": "Nutrition values are for reference only and may change during actual preparation.",
    "order_nutrition_total": "Nutrition total",
    "hero_eyebrow": "Calorie calculator",
    "hero_title": "Mix & Match Your Own Bento",
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
    "cart_subtotal_note": "Estimated price (VAT included). A final quote is confirmed by our team.",
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
    "label_country_code": "Country code",
    "phone_placeholder": "e.g. 0900000001",
    "label_title_field": "Title",
    "title_mr": "Mr",
    "title_ms": "Ms",
    "label_fullname": "Full name",
    "fullname_placeholder": "Your name",
    "label_notes": "Notes / special requests (optional)",
    "notes_placeholder": "e.g. no chili, peanut allergy...",
    "confirm_request": "Request a quote",
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
    "toast_fill_fields_pickup": "Please fill in your name and phone number.",
    "toast_invalid_phone": "Please enter a valid phone number for the selected country.",
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
    "hours_lunch_time": "Everyday · 11AM – 1:30PM",
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
  "nav_contact": "Liên hệ",
  "intro_scroll_skip": "Chạm vào màn hình để bỏ qua",
  "contact_sheet_title": "Liên hệ với chúng tôi",
  "contact_call": "Gọi điện",
  "checkout_note_preorder": "Chỉ nhận đặt trước: vui lòng đặt ít nhất 1 giờ trước khung giờ bạn chọn.",
  "added_sheet_title": "Đã thêm vào giỏ",
  "added_add_more": "Chọn thêm bento",
  "added_go_cart": "Đi đến giỏ hàng",

  "mode_byo": "Tự tạo Bento",
  "mode_picks": "Set nổi bật",
  "mixmatch_card_title": "Bento của bạn",
  "mixmatch_card_desc": "Lựa chọn thành phần theo sở thích và nhu cầu cá nhân",
  "brand_intro_desc": "Bento healthy chuẩn Nhật — tự chọn nguyên liệu hoặc chọn set có sẵn, giao tươi mỗi ngày.",
  "byo_back": "Thực đơn",
  "picks_eyebrow": "Chọn nhanh",
  "picks_title": "Bento nổi bật",
  "picks_desc": "Các set Bento bán chạy do đầu bếp tuyển chọn. Chỉ cần chọn số lượng và thêm vào giỏ hàng.",
  "picks_search_placeholder": "Tìm bento…",
  "picks_filter_all": "Tất cả",
  "picks_veg_quick": "Recommend",
  "picks_group_sheet_title": "Chọn nhóm bento",
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
  "order_type_pickup": "Tự đến lấy",
  "pickup_time_title": "Thời gian lấy hàng",
  "pickup_date_label": "Ngày lấy hàng",
  "pickup_slot_label": "Khung giờ lấy hàng",
  "checkout_pickup_slot_note": "Vui lòng đến trong khung giờ 15 phút bạn đã chọn, mỗi ngày từ 11:00 - 13:30.",
  "pickup_location_label": "Địa điểm lấy hàng",
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
  "cart_nutrition_note": "Giá trị dinh dưỡng chỉ mang tính tham khảo, có thể thay đổi trong quá trình chế biến thực tế.",
  "order_nutrition_total": "Tổng dinh dưỡng",

  "hero_eyebrow": "Tính dinh dưỡng",
  "hero_title": "Mix & Match Your Own Bento",
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
  "cart_subtotal_note": "Giá tạm tính (đã gồm VAT). Báo giá chính thức khi nhân viên xác nhận.",

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
  "label_country_code": "Mã quốc gia",
  "phone_placeholder": "Ví dụ: 0901234567",

  "label_title_field": "Danh xưng",
  "title_mr": "Anh",
  "title_ms": "Chị",
  "label_fullname": "Họ và tên",
  "fullname_placeholder": "Nhập họ và tên",

  "label_notes": "Ghi chú / yêu cầu khác (không bắt buộc)",
  "notes_placeholder": "VD: không ăn cay, dị ứng đậu phộng...",

  "confirm_request": "Yêu cầu báo giá",

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
  "toast_fill_fields_pickup": "Vui lòng nhập đầy đủ họ tên và số điện thoại.",
  "toast_invalid_phone": "Vui lòng nhập số điện thoại hợp lệ theo quốc gia đã chọn.",
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
  "hours_lunch_time": "Hằng ngày · 11:00 - 13:30",
  "footer_follow": "Theo dõi",
  "footer_order_on": "Đặt món trên",
  "footer_directions": "Chỉ đường",
  "footer_reviews": "Đánh giá trên Google",

  "footer_demo_notice": "Website đang trong quá trình demo, chưa được sử dụng cho mục đích thương mại.",
  "footer_copyright": "© 2026 Kenko Bento by Rokusho. Bảo lưu mọi quyền.",
  "footer_privacy": "Chính sách bảo mật · Điều khoản",

  "lang_switcher_label": "Ngôn ngữ"
},
};
const ITEM_I18N = {
  "chicken-drumstick": {
    "vi": "Đùi gà nướng",
  },
  "chicken-breast": {
    "vi": "Ức gà nướng",
  },
  "salmon": {
    "vi": "Cá hồi nướng",
  },
  "beef-belly": {
    "vi": "Ba chỉ bò nướng",
  },
  "saba": {
    "vi": "Cá Saba nướng",
  },
  "cod-fish": {
    "vi": "Cá tuyết nướng",
  },
  "rice-white": {
    "vi": "Cơm Nhật",
  },
  "rice-brown": {
    "vi": "Cơm gạo lứt",
  },
  "soba": {
    "vi": "Mì soba",
  },
  "sweet-corn": {
    "vi": "Bắp Mỹ luộc",
  },
  "sweet-potato": {
    "vi": "Khoai lang luộc",
  },
  "mushroom-simmered": {
    "vi": "Nấm kho",
  },
  "tomato-grilled": {
    "vi": "Cà chua nướng",
  },
  "mixed-salad": {
    "vi": "Salad theo ngày",
  },
  "stir-fried-veg": {
    "vi": "Rau xào",
  },
  "broccoli": {
    "vi": "Bông cải luộc",
  },
  "spinach": {
    "vi": "Bó xôi luộc",
  },
  "carrot": {
    "vi": "Cà rốt hấp",
  },
  "potato-grilled": {
    "vi": "Khoai tây nướng",
  },
  "pumpkin-grilled": {
    "vi": "Bí đỏ nướng paprika",
  },
  "sesame-mayo": {
    "vi": "Sốt mè mayo",
  },
  "shoyu-dressing": {
    "vi": "Sốt trái cây",
  },
  "mentsuyu": {
    "vi": "Sốt mì lạnh (Mentsuyu)",
  },
  "soy-sauce": {
    "vi": "Sốt nước tương",
  },
  "teriyaki": {
    "vi": "Sốt teriyaki",
  },
  "sesame-honey": {
    "vi": "Sốt mè rang mật ong",
  }
};

let LANG = 'en';
try{
  const saved = localStorage.getItem('rokusho_lang');
  if(saved && I18N[saved]) LANG = saved;
}catch(e){ /* localStorage unavailable — default to English */ }

const LOCALE_MAP = {en:'en-US', vi:'vi-VN'};
const WEEKDAY_INITIALS = {
  en:['S','M','T','W','T','F','S'],
  vi:['CN','T2','T3','T4','T5','T6','T7'],
};

function tr_(key){ return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key; }
function currentLocale(){ return LOCALE_MAP[LANG] || 'en-US'; }

// Sheet prices are the "Proposed Price (exclude VAT & SVC)" column — the
// customer-facing price adds 8% VAT on top (no service charge). Applied only
// at display time, so every running total sums raw base prices first and
// rounds once at the end, like kcal.
const PRICE_MULTIPLIER = 1.08;
function fmtPrice(basePrice){
  return Math.round((basePrice||0) * PRICE_MULTIPLIER).toLocaleString('vi-VN');
}
function fmtPriceDelta(basePriceDelta){
  const v = Math.round((basePriceDelta||0) * PRICE_MULTIPLIER);
  return (v>=0?'+':'') + v.toLocaleString('vi-VN');
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
   BentoMenuAPI.gs; empty until that fetch resolves.
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

const GROUP_I18N = {
  'special': {
    vi:{label:'Đặc Biệt', desc:'Món đặc biệt xoay vòng từ đầu bếp, nằm ngoài 4 nhóm thường ngày.'},
  },
  'high-protein': {
    vi:{label:'Giàu Đạm', desc:'Xây dựng quanh khẩu phần đạm dồi dào giúp phục hồi và no lâu.'},
  },
  'low-carb': {
    vi:{label:'Ít Tinh Bột', desc:'Giảm tinh bột, vẫn giữ trọn hương vị.'},
  },
  'balanced': {
    vi:{label:'Cân Bằng', desc:'Tỷ lệ đều giữa đạm, tinh bột và chất béo lành mạnh — lựa chọn mỗi ngày.'},
  },
  'vegetarian': {
    vi:{label:'Chay', desc:'Không thịt, không hải sản, dùng trứng onsen làm nguồn đạm chính.'},
  }
};

// Name and ingredient-list (tagline) translations both come straight from
// the "Chef's Picks" sheet (VI/JA/KO/ZH columns — see BentoMenuAPI.gs), so
// every pick auto-updates as soon as a translator fills in the sheet cell,
// rather than needing a matching hand-maintained code entry per id.
function pickName(pick){
  const fromSheet = pick['name_'+LANG];
  return (LANG!=='en' && fromSheet) || pick.name;
}
function pickTagline(pick){
  const fromSheet = pick['tagline_'+LANG];
  return (LANG!=='en' && fromSheet) || pick.tagline;
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
// auto-selects it. Either picking a different sauce OR removing mentsuyu
// itself afterwards asks for confirmation instead of blocking outright:
// "Yes" lets the change go through like a normal sauce pick, "No" leaves
// mentsuyu selected untouched.
const SOBA_SAUCE_LOCK = 'mentsuyu';
function setItemQty(cat, id, newQty){
  newQty = Math.max(0, newQty);
  if(cat==='sauce' && qty['soba']>0){
    const isAddingOtherSauce = id!==SOBA_SAUCE_LOCK && newQty>0;
    const isRemovingMentsuyu = id===SOBA_SAUCE_LOCK && newQty<qty[id];
    if((isAddingOtherSauce || isRemovingMentsuyu) && !confirm(tr_('soba_sauce_confirm'))) return;
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
  const media = item.image
    ? `<img class="ing-media-img" src="${itemImg(item.image)}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}'" alt="${name}">`
    : `<span class="ing-illustration" role="img" aria-label="${name}">${iconSvg(item.icon)}</span>`;
  return `<div class="ing-card${selected?' has-qty':''}" data-cat="${cat}" data-id="${item.id}" data-select="${item.id}" data-select-cat="${cat}">
    <span class="ing-media${item.image?' has-photo':''}">${media}</span>
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
  return `<div class="pick-card${isRecommendPick(pick)?' is-recommend':''}" data-pick-id="${pick.id}">
    <div class="pick-media${pick.image?' has-photo':''}">${isRecommendPick(pick)?`<span class="pick-reco-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.3l-1.5-1.35C5.4 14.36 2.5 11.72 2.5 8.5 2.5 6.02 4.42 4.1 6.9 4.1c1.4 0 2.74.65 3.6 1.68a4.77 4.77 0 0 1 3.6-1.68c2.48 0 4.4 1.92 4.4 4.4 0 3.22-2.9 5.86-8 10.45z"/></svg>${tr_('picks_veg_quick')}</span>`:''}<img class="pick-media-img" src="${itemImg(pick.image)}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}';var m=this.closest('.pick-media');if(m)m.classList.remove('has-photo')" alt="${name}"></div>
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

// Ingredient ids the "Recommend" quick-filter keys on (see RECOMMEND_ITEMS).
const RECOMMEND_ITEMS = ['salmon','chicken-breast'];
// A pick is "recommended" if it contains salmon or chicken breast. Substring
// match so portion-suffixed ids (e.g. "chicken-breast-full-portion") count.
function isRecommendPick(pick){
  if(/chirashi/i.test(pick.name || '')) return true;
  const items = Array.isArray(pick.items) ? pick.items : [];
  return items.some(id=>RECOMMEND_ITEMS.some(key=>String(id).includes(key)));
}
function filteredPicks(){
  const q = pickSearchQuery.trim().toLowerCase();
  return PICKS.filter(p=>{
    if(pickGroupFilter==='recommend'){
      if(!isRecommendPick(p)) return false;
    } else if(pickGroupFilter!=='all' && p.group!==pickGroupFilter){
      return false;
    }
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

  // Mobile's compact toolbar mirrors the same filter state via a pill button
  // that opens a bottom-sheet group picker, plus a one-tap Vegetarian
  // shortcut, instead of the full chip row.
  const groupLabelFor = g => g==='all' ? tr_('picks_filter_all') : groupLabel(g);
  const btnLabel = document.getElementById('picksMobileGroupLabel');
  // 'recommend' is a cross-group quick filter, not a collection — the group
  // pill falls back to "All" so groupLabel() is never asked for a missing group.
  if(btnLabel) btnLabel.textContent = pickGroupFilter==='recommend' ? tr_('picks_filter_all') : groupLabelFor(pickGroupFilter);
  const list = document.getElementById('picksGroupList');
  if(list){
    list.innerHTML = chips.map(g=>
      `<button type="button" class="picks-group-sheet-option${pickGroupFilter===g?' is-active':''}" data-group-sheet="${g}">${groupLabelFor(g)}</button>`
    ).join('');
  }
  document.getElementById('picksMobileVeg').classList.toggle('is-active', pickGroupFilter==='recommend');
}

// Each collection renders as its own horizontally-scrolling row (up to 4
// cards in view at once — see .picks-grid/.pick-card flex-basis), with
// prev/next arrows either side. Groups with no matches (search/filter) are
// simply omitted; an empty overall result shows a "no results" message.
function renderPicks(){
  renderPicksChips();
  const filtered = filteredPicks();
  const groupsWithItems = GROUP_ORDER.filter(g=>filtered.some(p=>p.group===g));
  document.getElementById('picksGrid').innerHTML = (groupsWithItems.length ? groupsWithItems.map(g=>{
    const meta = GROUP_META[g];
    const items = filtered.filter(p=>p.group===g);
    return `<div class="picks-group" data-group="${g}">
      <div class="picks-group-head">
        <div><h3>${groupLabel(g)}</h3><p>${groupDesc(g)}</p></div>
      </div>
      <div class="picks-carousel-wrap">
        <button type="button" class="picks-carousel-arrow prev" data-carousel-prev="${g}" aria-label="Previous">‹</button>
        <div class="card-grid picks-grid" data-carousel="${g}">${items.map(pickCardTemplate).join('')}</div>
        <button type="button" class="picks-carousel-arrow next" data-carousel-next="${g}" aria-label="Next">›</button>
      </div>
    </div>`;
  }).join('') : `<p class="picks-no-results">${tr_('picks_no_results')}</p>`);
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
      // Scroll-spy: while browsing "all", the pill label follows whichever
      // collection is in view (without changing the actual filter).
      if(pickGroupFilter==='all'){
        const btnLabel = document.getElementById('picksMobileGroupLabel');
        if(btnLabel) btnLabel.textContent = groupLabel(g);
      }
      document.getElementById('picksMobileVeg').classList.toggle('is-active', pickGroupFilter==='recommend');
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
  media.innerHTML = `<img class="pick-media-img" src="${itemImg(pick.image)}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}';var m=this.closest('.pick-modal-media');if(m)m.classList.remove('has-photo')" alt="${pickName(pick)}">`;
  media.classList.toggle('has-photo', !!pick.image);
  media.style.background = '';
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
  if(item.image){
    media.innerHTML = `<img class="pick-media-img" src="${itemImg(item.image)}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}'" alt="${name}">`;
    media.classList.add('has-photo');
    media.style.background = '';
    media.style.color = '';
  } else {
    media.innerHTML = `<span class="ing-illustration" role="img" aria-label="${name}">${iconSvg(item.icon)}</span>`;
    media.classList.remove('has-photo');
    media.style.background = pastel.bg;
    media.style.color = pastel.text;
  }
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
  const badge = item.image
    ? `<span class="line-badge has-photo"><img src="${itemImg(item.image)}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}'" alt="${itemName(item)}"></span>`
    : `<span class="line-badge" style="background:${pastel.bg};color:${pastel.text}">${iconSvg(item.icon)}</span>`;
  return `<div class="line-row" data-cat="${cat}">
    ${badge}
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
  </div>
  <p class="checkout-note">${tr_('cart_nutrition_note')}</p>`;

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
      <span class="r-thumb"><img src="${line.image || LOGO_MARK_SRC}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}'" alt=""></span>
      <span class="r-line-label">${line.label} × ${line.qty}</span>
      <span class="r-line-price">
        <b>${linePrice}</b>
        <small>${lineKcal} kcal</small>
      </span>
    </div>`;
    if(line.ingredients && line.ingredients.length){
      groups += `<div class="r-line-detail">${line.ingredients.map(ing=>ing.name+' x'+ing.qty).join(', ')}</div>`;
    }
    if(line.note){
      groups += `<div class="r-line-detail r-line-note">${tr_('line_note_label')}: ${escHtml(line.note)}</div>`;
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
        orderType: order.contact.orderType || 'delivery',
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
  // Close the "Your bento" side panel, then offer the next step: add another
  // one (back to the main list) or head to the cart — see #addedSheet handlers.
  closePanel();
  openAddedSheet();
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

// Phone country codes — [ISO 3166-1 alpha-2, dial code, English name].
// Flags are derived from the alpha-2 code (regional-indicator codepoints)
// rather than pasted in, so this list is just the data.
const PHONE_COUNTRIES_RAW = [
  ['VN','84','Vietnam'],
  ['AF','93','Afghanistan'],['AL','355','Albania'],['DZ','213','Algeria'],['AD','376','Andorra'],
  ['AO','244','Angola'],['AR','54','Argentina'],['AM','374','Armenia'],['AU','61','Australia'],
  ['AT','43','Austria'],['AZ','994','Azerbaijan'],['BS','1','Bahamas'],['BH','973','Bahrain'],
  ['BD','880','Bangladesh'],['BB','1','Barbados'],['BY','375','Belarus'],['BE','32','Belgium'],
  ['BZ','501','Belize'],['BJ','229','Benin'],['BT','975','Bhutan'],['BO','591','Bolivia'],
  ['BA','387','Bosnia and Herzegovina'],['BW','267','Botswana'],['BR','55','Brazil'],
  ['BN','673','Brunei'],['BG','359','Bulgaria'],['BF','226','Burkina Faso'],['BI','257','Burundi'],
  ['KH','855','Cambodia'],['CM','237','Cameroon'],['CA','1','Canada'],['CV','238','Cape Verde'],
  ['CF','236','Central African Republic'],['TD','235','Chad'],['CL','56','Chile'],['CN','86','China'],
  ['CO','57','Colombia'],['KM','269','Comoros'],['CD','243','Congo (DRC)'],['CG','242','Congo (Republic)'],
  ['CR','506','Costa Rica'],['HR','385','Croatia'],['CU','53','Cuba'],['CY','357','Cyprus'],
  ['CZ','420','Czech Republic'],['DK','45','Denmark'],['DJ','253','Djibouti'],['DO','1','Dominican Republic'],
  ['EC','593','Ecuador'],['EG','20','Egypt'],['SV','503','El Salvador'],['EE','372','Estonia'],
  ['ET','251','Ethiopia'],['FJ','679','Fiji'],['FI','358','Finland'],['FR','33','France'],
  ['GA','241','Gabon'],['GM','220','Gambia'],['GE','995','Georgia'],['DE','49','Germany'],
  ['GH','233','Ghana'],['GR','30','Greece'],['GT','502','Guatemala'],['GN','224','Guinea'],
  ['HT','509','Haiti'],['HN','504','Honduras'],['HK','852','Hong Kong'],['HU','36','Hungary'],
  ['IS','354','Iceland'],['IN','91','India'],['ID','62','Indonesia'],['IR','98','Iran'],
  ['IQ','964','Iraq'],['IE','353','Ireland'],['IL','972','Israel'],['IT','39','Italy'],
  ['CI','225','Ivory Coast'],['JM','1','Jamaica'],['JP','81','Japan'],['JO','962','Jordan'],
  ['KZ','7','Kazakhstan'],['KE','254','Kenya'],['KW','965','Kuwait'],['KG','996','Kyrgyzstan'],
  ['LA','856','Laos'],['LV','371','Latvia'],['LB','961','Lebanon'],['LS','266','Lesotho'],
  ['LR','231','Liberia'],['LY','218','Libya'],['LI','423','Liechtenstein'],['LT','370','Lithuania'],
  ['LU','352','Luxembourg'],['MO','853','Macau'],['MG','261','Madagascar'],['MW','265','Malawi'],
  ['MY','60','Malaysia'],['MV','960','Maldives'],['ML','223','Mali'],['MT','356','Malta'],
  ['MU','230','Mauritius'],['MX','52','Mexico'],['MD','373','Moldova'],['MC','377','Monaco'],
  ['MN','976','Mongolia'],['ME','382','Montenegro'],['MA','212','Morocco'],['MZ','258','Mozambique'],
  ['MM','95','Myanmar'],['NA','264','Namibia'],['NP','977','Nepal'],['NL','31','Netherlands'],
  ['NZ','64','New Zealand'],['NI','505','Nicaragua'],['NE','227','Niger'],['NG','234','Nigeria'],
  ['KP','850','North Korea'],['MK','389','North Macedonia'],['NO','47','Norway'],['OM','968','Oman'],
  ['PK','92','Pakistan'],['PA','507','Panama'],['PG','675','Papua New Guinea'],['PY','595','Paraguay'],
  ['PE','51','Peru'],['PH','63','Philippines'],['PL','48','Poland'],['PT','351','Portugal'],
  ['QA','974','Qatar'],['RO','40','Romania'],['RU','7','Russia'],['RW','250','Rwanda'],
  ['SA','966','Saudi Arabia'],['SN','221','Senegal'],['RS','381','Serbia'],['SG','65','Singapore'],
  ['SK','421','Slovakia'],['SI','386','Slovenia'],['SO','252','Somalia'],['ZA','27','South Africa'],
  ['KR','82','South Korea'],['SS','211','South Sudan'],['ES','34','Spain'],['LK','94','Sri Lanka'],
  ['SD','249','Sudan'],['SR','597','Suriname'],['SE','46','Sweden'],['CH','41','Switzerland'],
  ['SY','963','Syria'],['TW','886','Taiwan'],['TJ','992','Tajikistan'],['TZ','255','Tanzania'],
  ['TH','66','Thailand'],['TL','670','Timor-Leste'],['TG','228','Togo'],['TT','1','Trinidad and Tobago'],
  ['TN','216','Tunisia'],['TR','90','Turkey'],['TM','993','Turkmenistan'],['UG','256','Uganda'],
  ['UA','380','Ukraine'],['AE','971','United Arab Emirates'],['GB','44','United Kingdom'],
  ['US','1','United States'],['UY','598','Uruguay'],['UZ','998','Uzbekistan'],['VE','58','Venezuela'],
  ['YE','967','Yemen'],['ZM','260','Zambia'],['ZW','263','Zimbabwe']
];
function flagEmoji(cc){
  return String.fromCodePoint(...cc.split('').map(ch=>127397+ch.charCodeAt(0)));
}
const PHONE_COUNTRIES = PHONE_COUNTRIES_RAW.map(([cc,dial,name])=>({cc,dial,name,flag:flagEmoji(cc)}));

// National number length per country — [min,max] digits, the way a local
// person would type their own number (leading trunk 0 included where that's
// the norm, e.g. Vietnam's 10-digit mobiles). Anything not listed here falls
// back to a lenient generic range rather than blocking the order outright.
const PHONE_LEN_DEFAULT = [6,14];
const PHONE_LEN = {
  VN:[10,10], US:[10,10], CA:[10,10], GB:[10,11], FR:[9,9], DE:[10,11], IT:[9,10],
  ES:[9,9], PT:[9,9], NL:[9,9], BE:[8,9], CH:[9,9], AT:[10,11], SE:[7,9], NO:[8,8],
  DK:[8,8], FI:[9,10], PL:[9,9], CZ:[9,9], IE:[9,9], GR:[10,10], RU:[10,10], UA:[9,9],
  JP:[10,11], KR:[9,11], CN:[11,11], TW:[9,10], HK:[8,8], MO:[8,8], MN:[8,8],
  IN:[10,10], PK:[10,10], BD:[10,10], LK:[9,9], NP:[10,10],
  TH:[9,10], SG:[8,8], MY:[9,10], ID:[9,12], PH:[10,11], MM:[8,10], KH:[8,9],
  LA:[8,10], BN:[7,7], TL:[7,8],
  AE:[9,9], SA:[9,9], QA:[8,8], KW:[8,8], BH:[8,8], OM:[8,8], IL:[9,9], TR:[10,10], JO:[9,9], LB:[7,8],
  AU:[9,9], NZ:[8,9],
  MX:[10,10], BR:[10,11], AR:[10,11], CL:[9,9], CO:[10,10], PE:[9,9],
  ZA:[9,9], NG:[10,10], EG:[10,10], KE:[9,9], MA:[9,9]
};
// A few dial codes are shared by several countries (+1: US/Canada/several
// Caribbean nations, +7: Russia/Kazakhstan) — pick the country someone
// typing that code almost always means, for flag + digit-length purposes.
const PHONE_DIAL_PRIORITY = {'1':'US', '7':'RU'};
function countryForDial(dial){
  if(!dial) return null;
  if(PHONE_DIAL_PRIORITY[dial]){
    const preferred = PHONE_COUNTRIES.find(c=>c.cc===PHONE_DIAL_PRIORITY[dial]);
    if(preferred) return preferred;
  }
  return PHONE_COUNTRIES.find(c=>c.dial===dial) || null;
}
function phoneLenFor(cc){ return PHONE_LEN[cc] || PHONE_LEN_DEFAULT; }
function phoneLenForDial(dial){
  const country = countryForDial(dial);
  return country ? phoneLenFor(country.cc) : PHONE_LEN_DEFAULT;
}
function isValidPhoneDigits(dial, digits){
  const [min,max] = phoneLenForDial(dial);
  return digits.length>=min && digits.length<=max;
}
// Inline "wrong digit count" warning under the phone field — shown on blur
// (once there's something to judge) and re-checked whenever the dial code
// changes; a blank field is left alone since that's the separate
// "required field" check on submit, not a format problem.
function validatePhoneField(){
  const input = document.getElementById('ckPhone');
  const errorEl = document.getElementById('ckPhoneError');
  if(!input || !errorEl) return true;
  const digits = input.value.replace(/\D/g,'');
  const dial = document.getElementById('ckPhoneDial')?.value || checkoutData.dialCode || '84';
  const valid = !digits || isValidPhoneDigits(dial, digits);
  input.classList.toggle('is-invalid', !valid);
  errorEl.style.display = valid ? 'none' : 'block';
  return valid;
}
// Only prefixes non-VN numbers with their dial code — VN stays as the plain
// 10-digit string customers and CUSTOMER_DB have always used, so existing
// lookups and staff habits aren't disturbed.
function formattedPhone(){
  const digits = (checkoutData.phone||'').replace(/\D/g,'');
  if(!checkoutData.dialCode || checkoutData.dialCode==='84') return digits;
  return `+${checkoutData.dialCode} ${digits}`;
}

let cartStep = 'review'; // review | datetime | contact | done
let checkoutData = {orderType:'delivery', date:'', dateLabel:'', slot:'', slotLabel:'', phone:'', dialCode:'84', name:'', title:'Mr', address:'', email:'', notes:''};
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

// Pickup window is the same 11:00 AM – 1:30 PM, split into tighter 15-minute slots.
const PICKUP_SLOTS = [
  {id:'11:00', label:'11:00 – 11:15 AM'},
  {id:'11:15', label:'11:15 – 11:30 AM'},
  {id:'11:30', label:'11:30 – 11:45 AM'},
  {id:'11:45', label:'11:45 AM – 12:00 PM'},
  {id:'12:00', label:'12:00 – 12:15 PM'},
  {id:'12:15', label:'12:15 – 12:30 PM'},
  {id:'12:30', label:'12:30 – 12:45 PM'},
  {id:'12:45', label:'12:45 – 1:00 PM'},
  {id:'13:00', label:'1:00 – 1:15 PM'},
  {id:'13:15', label:'1:15 – 1:30 PM'}
];

const PICKUP_LOCATION_ADDRESS = 'Kenko Bento by Rokusho — Số 2 Thi Sách, Phường Sài Gòn, TP. Hồ Chí Minh';
const PICKUP_LOCATION_MAPS_URL = 'https://maps.app.goo.gl/5yLvMW6ecNKBo8sm6';

// Pre-order rule: an order must be placed at least this many minutes before
// the chosen slot starts. Same-day slots that fall inside this window are
// dropped; once every slot today is within it, today closes and the earliest
// bookable date rolls to tomorrow.
const PREORDER_LEAD_MIN = 60;
function slotStartMin(slotId){ const p = slotId.split(':'); return (+p[0])*60 + (+p[1]); }
function isoDate(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
// Slots available for a given date + order type: all of them for a future
// date, or only those at least PREORDER_LEAD_MIN ahead of now for today.
function slotsForDate(dateIso, orderType){
  const slots = orderType==='pickup' ? PICKUP_SLOTS : DELIVERY_SLOTS;
  if(dateIso !== isoDate(new Date())) return slots;
  const now = new Date();
  const cutoff = now.getHours()*60 + now.getMinutes() + PREORDER_LEAD_MIN;
  return slots.filter(s => slotStartMin(s.id) >= cutoff);
}
function earliestAllowedDate(){
  const now = new Date();
  const today = isoDate(now);
  const todayOpen = slotsForDate(today,'delivery').length > 0 || slotsForDate(today,'pickup').length > 0;
  const offset = todayOpen ? 0 : 1;
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()+offset);
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

// Bottom-sheet group picker for the mobile Chef's Picks toolbar (options are
// filled in by renderPicksChips).
function openPicksGroupSheet(){
  document.getElementById('picksGroupSheet').classList.add('is-open');
  document.getElementById('picksGroupSheet').setAttribute('aria-hidden','false');
  document.getElementById('picksGroupOverlay').classList.add('is-open');
  document.getElementById('picksMobileGroupBtn').classList.add('is-open');
  document.body.style.overflow='hidden';
}
function closePicksGroupSheet(){
  document.getElementById('picksGroupSheet').classList.remove('is-open');
  document.getElementById('picksGroupSheet').setAttribute('aria-hidden','true');
  document.getElementById('picksGroupOverlay').classList.remove('is-open');
  document.getElementById('picksMobileGroupBtn').classList.remove('is-open');
  document.body.style.overflow='';
}

// Contact bottom-sheet (Call / Messenger / Zalo / WhatsApp) — reuses the
// group-sheet styling. Each option is a plain link that deep-links to the
// relevant app; tapping one also dismisses the sheet.
function openContactSheet(){
  document.getElementById('contactSheet').classList.add('is-open');
  document.getElementById('contactSheet').setAttribute('aria-hidden','false');
  document.getElementById('contactOverlay').classList.add('is-open');
  document.body.style.overflow='hidden';
}
function closeContactSheet(){
  document.getElementById('contactSheet').classList.remove('is-open');
  document.getElementById('contactSheet').setAttribute('aria-hidden','true');
  document.getElementById('contactOverlay').classList.remove('is-open');
  document.body.style.overflow='';
}

// "Added to cart" prompt after building a bento: add another (back to the
// main list) or go straight to the cart.
function openAddedSheet(){
  document.getElementById('addedSheet').classList.add('is-open');
  document.getElementById('addedSheet').setAttribute('aria-hidden','false');
  document.getElementById('addedOverlay').classList.add('is-open');
  document.body.style.overflow='hidden';
}
function closeAddedSheet(){
  document.getElementById('addedSheet').classList.remove('is-open');
  document.getElementById('addedSheet').setAttribute('aria-hidden','true');
  document.getElementById('addedOverlay').classList.remove('is-open');
  document.body.style.overflow='';
}

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
  const n = lineNutrition(line);
  // Chef's Pick lines (plain or customized) open the full detail popup on
  // click instead of an inline breakdown — only build-your-own bentos still
  // use the old show/hide toggle.
  // Delivery-app style line: build-your-own bentos list every ingredient with
  // its own kcal inline; Chef's Picks show just the name (customised ones list
  // what changed). The whole row stays tap-to-edit; the "edit" text is just an
  // affordance sitting under the name, like the screenshot's "Chỉnh sửa".
  let breakdown = '';
  if(line.type==='custom'){
    breakdown = `<div class="cart-line-ings">${line.lines.map(l=>{
      const found = findItem(l.id);
      const dName = found ? itemName(found.item) : l.name;
      const q = l.qty>1 ? ` ×${l.qty}` : '';
      return `<div class="cart-line-ing">${dName}${q} · ${Math.round(l.kcal*l.qty)} kcal</div>`;
    }).join('')}</div>`;
  } else if(isPickCustom && line.changes && line.changes.length){
    breakdown = `<div class="cart-line-ings">${line.changes.map(c=>{
      const label = c.kind==='swap'
        ? `${c.toName} (${tr_('cart_swap_replaces')} ${c.fromName})`
        : `${c.name}${c.qty>1?` ×${c.qty}`:''}`;
      return `<div class="cart-line-ing">${label}</div>`;
    }).join('')}</div>`;
  }
  const editLabel = isEditablePick ? tr_('cart_edit_details') : tr_('cart_add_note');
  const editAttrs = isEditablePick
    ? ` data-cart-edit-pick="${line.pickId}" data-cart-edit-cartid="${line.cartId}"`
    : ` data-cart-edit-note="${line.cartId}"`;
  const noteText = line.note ? `<div class="cart-line-note-text">${escHtml(line.note)}</div>` : '';
  const thumbSrc = isEditablePick
    ? itemImg((PICKS.find(p=>p.id===line.pickId)||{}).image)
    : 'img/mix-match.png';
  return `<div class="cart-line is-editable"${editAttrs}>
    <span class="cart-line-thumb"><img src="${thumbSrc}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}'" alt="${displayLabel}"></span>
    <div class="cart-line-main">
      <div class="cart-line-label">${displayLabel}</div>
      <span class="cart-line-edit">${editLabel}</span>
      ${breakdown}
      ${noteText}
    </div>
    <div class="cart-line-right">
      <div class="cart-line-price">${fmtPrice(n.price*line.qty)}</div>
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
  const isPickup = checkoutData.orderType === 'pickup';
  document.getElementById('cartPanelTitle').textContent = tr_(isPickup ? 'pickup_time_title' : 'delivery_time_title');
  document.getElementById('cartStepLabel').textContent = tr_('step2of3');
  if(!checkoutData.date){
    const d = earliestAllowedDate();
    checkoutData.date = isoDate(d);
    checkoutData.dateLabel = d.toLocaleDateString(currentLocale(),{weekday:'short',month:'short',day:'numeric'});
  }
  const orderType = isPickup ? 'pickup' : 'delivery';
  let slots = slotsForDate(checkoutData.date, orderType);
  // Today's remaining slots for this order type may all sit inside the 1-hour
  // pre-order window — roll the date forward to the next day, which always has
  // every slot available.
  if(!slots.length){
    const d = new Date(checkoutData.date + 'T00:00:00');
    d.setDate(d.getDate() + 1);
    checkoutData.date = isoDate(d);
    checkoutData.dateLabel = d.toLocaleDateString(currentLocale(),{weekday:'short',month:'short',day:'numeric'});
    checkoutData.slot = ''; checkoutData.slotLabel = '';
    slots = slotsForDate(checkoutData.date, orderType);
  }
  if(!checkoutData.slot || !slots.find(s=>s.id===checkoutData.slot)){
    checkoutData.slot = slots[0].id;
    checkoutData.slotLabel = slots[0].label;
  }
  const note = tr_('checkout_note_preorder');

  body.innerHTML = `
    <div class="order-type-row">
      <button type="button" class="date-chip${isPickup?'':' is-selected'}" data-order-type="delivery">${tr_('order_delivery')}</button>
      <button type="button" class="date-chip${isPickup?' is-selected':''}" data-order-type="pickup">${tr_('order_type_pickup')}</button>
    </div>
    <div class="checkout-note">${note}</div>
    <div class="form-field"><label>${tr_(isPickup ? 'pickup_date_label' : 'delivery_date_label')}</label></div>
    <div class="calendar">${calendarHtml()}</div>
    <div class="form-field"><label>${tr_(isPickup ? 'pickup_slot_label' : 'delivery_slot_label')}</label></div>
    <div class="slot-grid">
      ${slots.map(s=>`<button type="button" class="date-chip${checkoutData.slot===s.id?' is-selected':''}" data-slot="${s.id}" data-slot-label="${s.label}">${s.label}</button>`).join('')}
    </div>
    <p class="checkout-note">${tr_(isPickup ? 'checkout_pickup_slot_note' : 'checkout_slot_note')}</p>
  `;
  footer.innerHTML = `<div style="display:flex;gap:10px;width:100%">
      <button class="btn btn-ghost" id="cartBackBtn" style="flex:1">${tr_('back_btn')}</button>
      <button class="btn btn-solid" id="cartContinueBtn" style="flex:2">${tr_('continue_details')}</button>
    </div>`;
}

// A rough "0123456789"-style example matching the dial code's expected
// digit count, so the placeholder hints at the right length.
function phonePlaceholderFor(dial){
  const [,max] = phoneLenForDial(dial);
  return '0'.repeat(max);
}
// Unrecognized dial code (not one of ours, or still mid-typing) — shown
// instead of a specific flag rather than guessing.
const PHONE_FLAG_UNKNOWN = '🏳️';
function renderCartContact(body, footer){
  const isPickup = checkoutData.orderType === 'pickup';
  document.getElementById('cartPanelTitle').textContent = tr_('contact_title');
  document.getElementById('cartStepLabel').textContent = tr_('step3of3');
  const dialMatch = countryForDial(checkoutData.dialCode);
  const addressBlock = isPickup
    ? `<div class="form-field">
        <label>${tr_('pickup_location_label')}</label>
        <div class="pickup-location-box">
          <b>${PICKUP_LOCATION_ADDRESS}</b>
          <a href="${PICKUP_LOCATION_MAPS_URL}" target="_blank" rel="noopener">${tr_('footer_directions')}</a>
        </div>
      </div>`
    : `<div class="form-field">
      <label>${tr_('label_address')}</label>
      <div class="ck-address-wrap">
        <textarea id="ckAddress" rows="2" placeholder="${tr_('address_placeholder')}" autocomplete="off">${checkoutData.address}</textarea>
        <div class="ck-address-suggestions" id="ckAddressSuggestions"></div>
      </div>
      <div class="ck-distance" id="ckDistance"></div>
    </div>`;
  body.innerHTML = `
    <div class="form-field">
      <label>${tr_('label_phone')}</label>
      <div class="ck-phone-row">
        <div class="ck-phone-dial-wrap">
          <span class="ck-phone-flag" id="ckPhoneFlag">${dialMatch ? dialMatch.flag : PHONE_FLAG_UNKNOWN}</span>
          <span class="ck-phone-plus">+</span>
          <input type="tel" id="ckPhoneDial" class="ck-phone-dial" inputmode="numeric" maxlength="4" aria-label="${tr_('label_country_code')}" value="${escHtml(checkoutData.dialCode)}">
        </div>
        <input type="tel" id="ckPhone" placeholder="${phonePlaceholderFor(checkoutData.dialCode)}" value="${checkoutData.phone}">
      </div>
      <p class="ck-phone-error" id="ckPhoneError" style="display:none">${tr_('toast_invalid_phone')}</p>
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
    ${addressBlock}
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
  if(!isPickup && checkoutData.address) scheduleDistanceLookup(checkoutData.address);
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
      <div class="order-items-box">
        ${lastOrder.lines.map(line=>{
          const lineKcal = Math.round(line.nutrition.kcal * line.qty);
          const sub = (line.ingredients && line.ingredients.length)
            ? `<div class="order-item-sub">${line.ingredients.map(ing=>ing.name+' x'+ing.qty).join(', ')}</div>`
            : '';
          const linePrice = fmtPrice(line.nutrition.price * line.qty);
          return `<div class="order-item-row">
            <span class="order-item-thumb"><img src="${line.image || LOGO_MARK_SRC}" onerror="this.onerror=null;this.src='${LOGO_MARK_SRC}'" alt="${line.label}"></span>
            <div class="order-item-body">
              <div class="order-item-main"><span>${line.label} × ${line.qty}</span><b>${linePrice}</b></div>
              <div class="order-item-sub">${lineKcal} kcal</div>
              ${sub}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="order-summary">
        <div><span>${tr_('order_items')}</span><b>${lastOrder.itemCount}</b></div>
        <div><span>${tr_(lastOrder.contact.orderType==='pickup' ? 'order_type_pickup' : 'order_delivery')}</span><b>${lastOrder.dateLabel}, ${lastOrder.slotLabel}</b></div>
        <div><span>${tr_('order_contact')}</span><b>${doneDisplayTitle} ${lastOrder.contact.name}, ${lastOrder.contact.phone}</b></div>
        <div><span>${tr_(lastOrder.contact.orderType==='pickup' ? 'pickup_location_label' : 'order_address')}</span><b>${lastOrder.contact.address}</b></div>
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
  if(document.getElementById('ckPhoneDial')) checkoutData.dialCode = get('ckPhoneDial') || '84';
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
      return {type: line.type, label, qty: line.qty, nutrition: lineNutrition(line), ingredients: null, note, image: itemImg(pick && pick.image)};
    }
    if(line.type==='pick-custom'){
      const basePick = PICKS.find(p=>p.id===line.pickId);
      const ingredients = line.changes.map(c=>{
        if(c.kind==='swap') return {name: `${c.toName} (${tr_('cart_swap_replaces')} ${c.fromName})`, qty:1, cat:c.cat};
        return {name: c.name, qty: c.qty, cat: c.cat};
      });
      return {type: line.type, label: line.label, qty: line.qty, nutrition: lineNutrition(line), ingredients, note, image: itemImg(basePick && basePick.image)};
    }
    const ingredients = line.lines.map(l=>{
      const found = findItem(l.id);
      return {name: found ? itemName(found.item) : l.name, qty: l.qty, cat: found ? found.cat : l.cat};
    });
    // Build-your-own bentos have no single dish photo — use the mix & match art.
    return {type: line.type, label: tr_('custom_bento_label'), qty: line.qty, nutrition: lineNutrition(line), ingredients, note, image: 'img/mix-match.png'};
  });
}

function confirmOrder(){
  syncContactFields();
  const isPickup = checkoutData.orderType === 'pickup';
  if(isPickup) checkoutData.address = PICKUP_LOCATION_ADDRESS;
  if(!checkoutData.phone || !checkoutData.name || (!isPickup && !checkoutData.address)){
    showToast(tr_(isPickup ? 'toast_fill_fields_pickup' : 'toast_fill_fields'));
    return;
  }
  if(!validatePhoneField()){
    showToast(tr_('toast_invalid_phone'));
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
    contact: {...checkoutData, phone: formattedPhone()},
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
function isMobile(){ return window.matchMedia('(max-width:760px)').matches; }

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
    pickGroupFilter = pickGroupFilter==='recommend' ? 'all' : 'recommend';
    renderPicks();
    return;
  }

  const groupChip = e.target.closest('[data-group-filter]');
  if(groupChip){ pickGroupFilter = groupChip.getAttribute('data-group-filter'); renderPicks(); return; }

  if(e.target.closest('#picksMobileGroupBtn')){ openPicksGroupSheet(); return; }
  if(e.target.id==='picksGroupOverlay'){ closePicksGroupSheet(); return; }
  const groupSheetOpt = e.target.closest('[data-group-sheet]');
  if(groupSheetOpt){
    pickGroupFilter = groupSheetOpt.getAttribute('data-group-sheet');
    renderPicks();
    closePicksGroupSheet();
    return;
  }

  if(e.target.id==='picksMobileSearchBtn' || e.target.closest('#picksMobileSearchBtn')){
    const row = document.getElementById('picksMobileSearchRow');
    const nowOpen = row.classList.toggle('is-open');
    if(nowOpen) document.getElementById('picksSearchMobile').focus();
    else { document.getElementById('picksSearchMobile').value = ''; pickSearchQuery = ''; renderPicks(); }
    return;
  }

  // Contact sheet: open from the header button, close on overlay/backdrop or
  // after tapping a method (the link's own navigation still fires).
  if(e.target.closest('[data-contact-open]')){ openContactSheet(); return; }
  if(e.target.id==='contactOverlay'){ closeContactSheet(); return; }
  if(e.target.closest('[data-contact-close]')){ closeContactSheet(); return; }

  // "Added to cart" prompt: add another bento (back to the main list / builder)
  // or go to the cart.
  if(e.target.id==='addedOverlay'){ closeAddedSheet(); return; }
  if(e.target.closest('#addMoreBtn')){ closeAddedSheet(); switchView(isMobile() ? 'picks' : 'byo'); window.scrollTo(0,0); return; }
  if(e.target.closest('#goCartBtn')){ closeAddedSheet(); cartStep='review'; if(isMobile()) switchView('picks'); openCartPanel(); return; }

  // Mix & Match card (mobile list) → open the build-your-own builder.
  if(e.target.closest('[data-open-byo]')){ switchView('byo'); window.scrollTo(0,0); return; }
  // Builder's mobile back button → return to the main list.
  if(e.target.closest('#byoBackBtn')){ switchView('picks'); window.scrollTo(0,0); return; }

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

  const orderTypeChip = e.target.closest('[data-order-type]');
  if(orderTypeChip){
    const newType = orderTypeChip.getAttribute('data-order-type');
    if(newType !== checkoutData.orderType){
      checkoutData.orderType = newType;
      checkoutData.slot = '';
      checkoutData.slotLabel = '';
      renderCartPanel();
    }
    return;
  }

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
  if(e.target && e.target.id==='ckPhone'){
    // CUSTOMER_DB is keyed by plain VN-format numbers only — a lookup
    // against a foreign number would never hit, so don't bother firing it.
    if(checkoutData.dialCode==='84') lookupCustomer(e.target.value);
    validatePhoneField();
  }
  if(e.target && e.target.id==='ckPhoneDial') validatePhoneField();
});

document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ closePanel(); closeCartPanel(); closePickDetail(); }
});

document.addEventListener('change', e=>{
  if(e.target && e.target.id==='langSelect'){ setLanguage(e.target.value); return; }
});

document.addEventListener('input', e=>{
  if(e.target && e.target.id==='picksSearch'){ pickSearchQuery = e.target.value; renderPicks(); }
  if(e.target && e.target.id==='picksSearchMobile'){ pickSearchQuery = e.target.value; renderPicks(); }
  if(e.target && e.target.id==='ckAddress'){ scheduleDistanceLookup(e.target.value); scheduleAddressSuggestions(e.target.value); }
  if(e.target && e.target.id==='ckPhone'){
    const digitsOnly = e.target.value.replace(/\D/g,'');
    if(digitsOnly !== e.target.value) e.target.value = digitsOnly;
    // Only clear a standing error while actively typing — re-flagging it
    // waits for the next blur, so it doesn't nag mid-entry.
    const dial = document.getElementById('ckPhoneDial')?.value || checkoutData.dialCode || '84';
    if(!digitsOnly || isValidPhoneDigits(dial, digitsOnly)) validatePhoneField();
  }
  if(e.target && e.target.id==='ckPhoneDial'){
    const digitsOnly = e.target.value.replace(/\D/g,'').slice(0,4);
    if(digitsOnly !== e.target.value) e.target.value = digitsOnly;
    checkoutData.dialCode = digitsOnly;
    const match = countryForDial(digitsOnly);
    const flagEl = document.getElementById('ckPhoneFlag');
    if(flagEl) flagEl.textContent = match ? match.flag : PHONE_FLAG_UNKNOWN;
    const phoneInput = document.getElementById('ckPhone');
    if(phoneInput) phoneInput.placeholder = phonePlaceholderFor(digitsOnly);
    // Same "only clear, don't flag" rule as the phone field itself while typing.
    const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g,'') : '';
    if(!phoneDigits || isValidPhoneDigits(digitsOnly, phoneDigits)) validatePhoneField();
  }
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
      // On mobile the app opens straight to the Chef's Picks list; the
      // build-your-own builder is reached only via the Mix & Match card.
      if(isMobile()) switchView('picks');
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

/* ---------- intro splash video ---------- */
(function(){
  const intro = document.getElementById('introVideo');
  if(!intro) return;
  const loader = document.getElementById('pageLoader');
  // The intro video is a first-visit-only splash. On any later load/reload in
  // the same session we skip it and fall back to the plain logo loader below.
  let seen = false;
  try{ seen = sessionStorage.getItem('rk_intro_seen') === '1'; }catch(e){}
  if(seen){ intro.remove(); return; }
  try{ sessionStorage.setItem('rk_intro_seen','1'); }catch(e){}
  // First visit: the video is the splash, so the logo loader never shows.
  if(loader) loader.remove();
  const vid = document.getElementById('introVideoEl');
  let done = false;
  function dismiss(){
    if(done) return;
    done = true;
    intro.classList.add('is-hidden');
    intro.addEventListener('transitionend', ()=>intro.remove(), {once:true});
  }
  // Tapping/clicking anywhere on the splash skips the clip.
  intro.addEventListener('click', dismiss);
  if(vid){
    vid.addEventListener('ended', dismiss);
    vid.addEventListener('error', dismiss);
    const p = vid.play && vid.play();
    if(p && p.catch) p.catch(()=>{}); // autoplay blocked — wait for a gesture
    // No video data shortly after load = missing/unplayable file: don't trap
    // the customer behind a black screen.
    setTimeout(()=>{ if(vid.readyState < 2) dismiss(); }, 1500);
  } else {
    dismiss();
  }
  // Absolute safety cap so the intro can never wedge the page.
  setTimeout(dismiss, 20000);
})();

/* ---------- page loader ---------- */
(function(){
  const loader = document.getElementById('pageLoader');
  if(!loader) return;
  const shownAt = Date.now();
  const MIN_VISIBLE_MS = 400;
  // Hard cap: never keep the splash up longer than 2s, even if the menu
  // fetch is slow or never fires rk:menu-ready.
  const MAX_VISIBLE_MS = 2000;
  let hidden = false;
  function hideLoader(){
    if(hidden) return;
    hidden = true;
    const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt));
    setTimeout(()=>{
      loader.classList.add('is-hidden');
      loader.addEventListener('transitionend', ()=>loader.remove(), {once:true});
    }, wait);
  }
  window.addEventListener('rk:menu-ready', hideLoader, {once:true});
  setTimeout(hideLoader, MAX_VISIBLE_MS);
})();

