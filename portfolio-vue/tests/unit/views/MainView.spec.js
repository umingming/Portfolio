import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import MainView from "@/views/MainView.vue";
import { SLIDES, INTROS } from "@/constants/main";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
    state: {
        top: 700,
        bottom: 2000,
    },
    getters: {
        inViewport(state) {
            return (top, bottom) => top < state.bottom && bottom > state.top;
        },
    },
});

/*
    1. 랜더링 확인 : O
    2. 화살표 클릭에 따른 슬라이드 변경 : O
    3. 버튼 클릭 시, 페이지 생성 여부 : O
    4. 스크롤 이동 시, 애니메이션 적용 여부 : X
    5. 이벤트 리스너 제거 : X
    6. 스크롤 다운 이벤트: X
*/

/*
    1. 렌더링 확인
        - 기본 슬라이드로 렌더링되었는지
        - intro에 Github 버튼이 있는지
*/
test("renders the default contents", () => {
    //Given
    const wrapper = mount(MainView, {
        localVue,
        store,
    });
    const txtSlide = SLIDES[0].en;
    const txtButton = INTROS[0].site.name;

    //Then
    expect(wrapper.find(".slide .txt").text()).toContain(txtSlide);
    expect(wrapper.find("#intro0 button").text()).toContain(txtButton);
});

/*
    2. 화살표 클릭에 따른 슬라이트 변경
        - 화살표 버튼 클릭
        - 마지막 슬라이드 인덱스의 정보로 랜더링 되었는지
*/
test("renders new slide to click the arrow", async () => {
    //Given
    const wrapper = mount(MainView, {
        localVue,
        store,
    });
    const newText = SLIDES[1].en;

    //When
    await wrapper.find(".arrow").trigger("click");

    //Then
    expect(wrapper.find(".slide .txt").text()).toContain(newText);
});

/*  
    3. 페이지 생성 여부
        - Github 버튼 클릭
        - 페이지 생성을 위한 함수의 인자 url이 올바른지
*/
test("creates new web site on button click", async () => {
    //Given
    const wrapper = mount(MainView, {
        localVue,
        store,
    });
    const { url } = INTROS[0].site;
    window.open = jest.fn();

    // When
    await wrapper.find("#intro0 button").trigger("click");

    // Then
    expect(window.open).toHaveBeenCalledWith(
        url,
        expect.anything(),
        expect.anything()
    );
});

/*  
    4. 스크롤 애니메이션
        - intro 화면이 보일 때 애니메이션 class가 부여 됐는지
*/
test("adds the animation class on scroll down", () => {
    //Given
    const wrapper = mount(MainView, {
        localVue,
        store,
    });

    // Then
    expect(wrapper.find(".main-intro .title").classes()).toContain(
        "slide-down"
    );
});
