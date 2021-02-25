<template>
  <div>
    <sdPageHeader title="Testimonials">
      <div slot="buttons" class="page-header-actions">
        <CalendarButton />
        <ExportButton />
        <ShareButton />
        <Button size="small" type="primary">
          <PlusIcon size="14" />
          Add New
        </Button>
      </div>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <TestimonialStyleWrapper>
            <sdCards headless>
              <div class="testimonial-block theme-1">
                <h2 class="testimonial-title">Testimonial 1</h2>
                <Swiper
                  :active-index="3"
                  loop
                  pagination-visible
                  pagination-clickable
                  ref="switchDemo"
                  :slides-per-view="3"
                >
                  <div
                    :key="n"
                    v-for="n in 5"
                    class="testimonial-block__single"
                  >
                    <figure>
                      <img
                        :src="require(`../../static/img/users/5.png`)"
                        alt=""
                      />
                      <figcaption>
                        <h2 class="client-name">{{ n }}</h2>
                        <p class="client-designation">{{ n }}</p>
                        <p class="client-review">{{ n }}</p>
                      </figcaption>
                    </figure>
                  </div>
                </Swiper>
                <router-link
                  to="#"
                  class="swiper-button-prev"
                  @click.native="prev"
                ></router-link
                ><router-link
                  to="#"
                  class="swiper-button-next"
                  @click.native="next"
                ></router-link>
              </div>
            </sdCards>
          </TestimonialStyleWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Button } from "../../components/buttons/Buttons";
import CalendarButton from "../../components/buttons/CalendarButton";
import ExportButton from "../../components/buttons/ExportButton";
import ShareButton from "../../components/buttons/ShareButton";
import { Main } from "../styled";
import { PlusIcon } from "vue-feather-icons";
import { Swiper } from "vue2-swiper";
import { TestimonialStyleWrapper } from "./style";

export default {
  name: "Testimonials",
  components: {
    PlusIcon,
    Button,
    CalendarButton,
    ExportButton,
    ShareButton,
    Main,
    Swiper,
    TestimonialStyleWrapper,
  },
  data() {
    return {
      paramsOne: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  methods: {
    prev() {
      this.$refs.switchDemo.prev();
    },
    next() {
      this.$refs.switchDemo.next();
    },
  },
};
</script>
