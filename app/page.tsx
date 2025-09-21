import Image from "next/image";

// React + Next.js + Tailwind CSSで、
// テキストを入れるエリアとボタンを中央に配置したシンプルなページを作成してください。
// テキストエリアは幅300px、高さ100px、ボタンは幅100px、高さ40pxにしてください。
// ボタンの背景色は青、テキスト色は白にしてください。
// ページ全体の背景色は薄い灰色にしてください。

// 次のページボタンを押したらテキストエリアの内容の1文字ずつの間に「・」を挿入した文字列を表示するようにしてください。
// 例えば、テキストエリアに「こんにちは」と入力されていたら、「こ・ん・に・ち・は」と表示されるようにしてください。
// 表示する場所はテキストエリアの下にしてください。
// また、表示された文字列をクリックすると、元のテキストエリアに戻るようにしてください。
// コード全体を示してください。

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <textarea
          className="w-[300px] h-[100px] p-2 border border-gray-300 rounded"
          placeholder="テキストを入力してください"
        ></textarea>
        <button className="w-[100px] h-[40px] bg-blue-500 text-white rounded">
          次のページ
        </button>
        <div className="mt-4 text-center text-gray-700 cursor-pointer">
          {/* ここに変換されたテキストが表示されます */}
        </div>
      </div>
    </main>
  );
}
