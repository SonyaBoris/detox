import SectionBlock from "@/components/landing/section-block";
import VideoTestimonials, {
  type VideoTestimonialItem,
} from "@/components/landing/video-testimonials";

const YANDEX_PUBLIC_KEY = "https://disk.yandex.ru/d/w2wEY3fBt0z_GA";
const YANDEX_API_URL = "https://cloud-api.yandex.net/v1/disk/public/resources";

type YandexPublicItem = {
  media_type?: string;
  mime_type?: string;
  name?: string;
  path?: string;
  preview?: string;
  file?: string;
};

type YandexPublicResponse = {
  _embedded?: {
    items?: YandexPublicItem[];
    total?: number;
  };
};

async function getYandexTestimonials(): Promise<VideoTestimonialItem[]> {
  const limit = 50;
  let offset = 0;
  const videos: VideoTestimonialItem[] = [];

  try {
    while (true) {
      const url = `${YANDEX_API_URL}?public_key=${encodeURIComponent(
        YANDEX_PUBLIC_KEY,
      )}&limit=${limit}&offset=${offset}`;
      const response = await fetch(url, {
        next: { revalidate: 300 },
      });

      if (!response.ok) {
        throw new Error(`Yandex Disk API failed: ${response.status}`);
      }

      const data = (await response.json()) as YandexPublicResponse;
      const items = data._embedded?.items ?? [];
      const total = data._embedded?.total ?? 0;

      for (const item of items) {
        const isVideo =
          item.media_type === "video" || item.mime_type?.startsWith("video/");
        if (!isVideo || !item.file || !item.path) {
          continue;
        }

        videos.push({
          id: item.path,
          title: item.name ?? "Видео-отзыв",
          src: item.file,
          poster: item.preview,
        });
      }

      offset += items.length;
      if (items.length === 0 || offset >= total) {
        break;
      }
    }
  } catch (error) {
    console.error("Failed to load Yandex Disk testimonials:", error);
    return [];
  }

  return videos;
}

export default async function TestimonialsSection() {
  const testimonials = await getYandexTestimonials();

  return (
    <SectionBlock id="testimonials" title="Отзывы участников">
      {testimonials.length > 0 ? (
        <VideoTestimonials items={testimonials} />
      ) : (
        <p className="note">
          Сейчас не удалось загрузить видео-отзывы. Проверьте публичную ссылку
          Яндекс.Диска.
        </p>
      )}
    </SectionBlock>
  );
}
