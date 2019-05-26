export default {
    FETCH_CONTACTS: "fetchContacts", //연락처 조회
    FETCH_CONTACT_ONE: "fectchContactOne", //연락처 한 건 조회
    INITIALIZE_CONTACT_ONE: "initializeContactOne", //연락처 초기화
    CHANGE_ISLOADING: "changeIsLoading", //스피너 UI 보여줄지 여부 결정

    //변이와 액션 모두에서 사용
    // ADD_CONTACT_FORM: "addContactForm", //입력폼 나타내기
    // CANCEL_FORM: "cancelForm", //입력, 수정폼 닫기
    // EDIT_CONTACT_FORM: "editPhotoFarm", //수정폼 나타내기
    // EDIT_PHOTO_FORM: "editPhotoForm", //사진 편집폼 나타내기

    //액션에서만 사용
    ADD_CONTACT: "addContact", //연락처 추가
    UPDATE_CONTACT: "updateContact", //연락처 수정
    UPDATE_PHOTO: "updatePhoto", //사진 수정
    DELETE_CONTACT: "deleteContact" //연락처 삭제
}