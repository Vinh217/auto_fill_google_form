import React, { useState, useEffect, useRef } from 'react';

const EmailForm = () => {
  const [ emails, setEmails ] = useState('');
  const [ formLink, setFormLink ] = useState('https://docs.google.com/forms/d/1Ix-YJnvXVuGM80B7fVAAapSfXp-lg7jHWxkF_AsB3pg/viewform');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ statusMessages, setStatusMessages ] = useState([]);

  const count3TimesRef = useRef(0);
  const countMoreThan3TimesRef = useRef(0);
  const op4Ref = useRef(0);
  const op5Ref = useRef(0);


  const ages = [ '18', '19', '20', '21' ];
  const optitons2SingleChoice = [ '1回 (Một lần)', '2回 (Hai lần)', '3回 (Ba lần)', 'それ以上 (Hơn ba lần)' ];
  const options3MultiChoice = [ 'ハンバーガー (Hamburger)', 'パン (bánh mì)', 'フライドチキン (Gà rán)', 'フライドポテト (Khoai tây chiên)' ];
  const options4SingleChoice = [ '安いです（rẻ）', '高いです (đắt）' ];
  const options5SingleChoice = [ 'a.ファーストフード店 (Nhà hàng đồ ăn nhanh)', 'コンビニエンスストア (Cửa hàng tiện lợi)', 'オンラインデリバリーサービス (Các dịch vụ giao hàng trực tuyến)', '歩道の店 (quán bán vỉa hè)' ];
  const options6SingleChoice = [ 'はい (Có)', 'いいえ (Không)', 'わからない (Không chắc chắn)' ];
  const options7MultiChoice = [ '体重増加 (Tăng cân)', '消化の問題（例：胃痛、便秘）(Vấn đề tiêu hóa (như đau dạ dày, táo bón))', '疲労感、倦怠感 (Mệt mỏi, uể oải)', '皮膚の問題（例：ニキビ）(Vấn đề về da (như mụn))' ];
  const options8SingleChoice = [ 'はい (Có)', 'いいえ (Không)', 'わからない (Không chắc chắn)' ];
  const options9MultiChoice = [ '学習集中力が低下する (Giảm khả năng tập trung học tập)', '疲労感やエネルギー不足を感じる (Cảm thấy mệt mỏi hoặc thiếu năng lượng)', '食事の準備や外出の時間が減る (Thời gian chuẩn bị bữa ăn hoặc ra ngoài giảm)', '健康問題のために医療機関を訪れる頻度が増す (Tăng tần suất thăm khám y tế do vấn đề sức khỏe)' ];
  const options10SingleChoice = [ 'はい、ファーストフードの食事の量を減らすよう努めています (Có, tôi cố gắng ăn ít thức ăn nhanh hơn)', 'はい、ファーストフードを健康的な選択肢に置き換えています (Có, tôi thay thế thức ăn nhanh bằng các lựa chọn lành mạnh hơn)', 'いいえ、対策はしていません (Không, tôi không thực hiện biện pháp nào)', 'いいえ、しかし対策を考えています (Không, nhưng tôi đang cân nhắc các biện pháp)' ];
  const options11SingleChoice = [ 'はい (Có)', 'いいえ (Không)', 'わからない (Không chắc chắn)' ];


  const chooseOption2 = () => {
    if (count3TimesRef.current < 14) {
      console.log('count3TimesRef.current :>> ', count3TimesRef.current);
      count3TimesRef.current += 1; // Increment the ref directly
      return '3回 (Ba lần)';
    } else if (countMoreThan3TimesRef.current < 15) {
      console.log('countMoreThan3TimesRef.current :>> ', countMoreThan3TimesRef.current);
      countMoreThan3TimesRef.current += 1; // Increment the ref directly
      return 'それ以上 (Hơn ba lần)';
    } else {
      return ['1回 (Một lần)', '2回 (Hai lần)'][Math.floor(Math.random() * 2)];
    }
  };

  const chooseOption4 = () => {
    if (op4Ref.current < 25) {
      op4Ref.current += 1;
      return '安いです（rẻ）';
    } else {
      return '高いです (đắt）';
    }
  };

  const chooseOption5 = () => {
    if (op5Ref.current < 20) {
       op5Ref.current += 1;
       return '歩道の店 (quán bán vỉa hè)';
    } else {
      return [ 'a.ファーストフード店 (Nhà hàng đồ ăn nhanh)', 'コンビニエンスストア (Cửa hàng tiện lợi)', 'オンラインデリバリーサービス (Các dịch vụ giao hàng trực tuyến)' ][ Math.floor(Math.random() * 2) ];
    }
  };

  const random = (items) => {
    return items[ Math.floor(Math.random() * items.length) ].toString();
  }

  const randomArrayItems = (arr) => {
    const randomLength = Math.floor(Math.random() * arr.length) + 1;
    const shuffledArray = arr.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, randomLength);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailArray = emails
      .split('\n')
      .map((email) => email.trim())
      .filter((email) => email !== '');

    setStatusMessages([]);
    setLoading(true);
    setError(null);
    try {
      for (const email of emailArray) {
        setStatusMessages((prev) => [ ...prev, `Đang gửi: ${email}` ]);
        const option2Result = chooseOption2(); 
        const option4Result = chooseOption4(); 
        const option5Result = chooseOption5(); 

        const params = {
          'usp': 'pp_url',
          'entry.102390596': random(ages),
          'entry.243897242': option2Result,
          'entry.2109520814': option4Result,
          'entry.2005404386': option5Result,
          'entry.1967827615': random(options6SingleChoice),
          'entry.1774373437': random(options8SingleChoice),
          'entry.526382010': random(options10SingleChoice),
          'entry.1572633572': random(options11SingleChoice)
        };

        const queryString = new URLSearchParams(params);

        //options3 
        const randomsO3 = randomArrayItems(options3MultiChoice);
        for (const item of randomsO3) {
          queryString.append('entry.2121376141', item);
        }

        //options 7
        const randomsO7 = randomArrayItems(options7MultiChoice);
        for (const item of randomsO7) {
          queryString.append('entry.860021553', item);
        }

        //options 9
        const randomsO9 = randomArrayItems(options9MultiChoice);
        for (const item of randomsO9) {
          queryString.append('entry.1673567450', item);
        }

        const fullUrl = `${formLink}?${queryString.toString()}`;

        const response = await fetch('/api/autosubmit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formUrl: fullUrl,
            emails: [ email ],
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'An error occurred');
        }

        setStatusMessages((prev) => [ ...prev, `Đã gửi thành công: ${email}` ]);
      }
      alert('Forms submitted successfully!');
    } catch (err) {
      setError(err.message || 'Failed to submit the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Google Form Email Submit</h2>

      <form onSubmit={ handleSubmit } className="space-y-6">
        { error && <p className="text-red-500">{ error }</p> }
        <div>
          <label htmlFor="emails" className="block text-sm font-medium text-gray-700">
            Nhập danh sách email (mỗi email 1 dòng):
          </label>
          <textarea
            id="emails"
            value={ emails }
            onChange={ (e) => setEmails(e.target.value) }
            placeholder="example1@gmail.com&#10;example2@gmail.com"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[200px]"
          />
        </div>

        <div>
          <label htmlFor="formLink" className="block text-sm font-medium text-gray-700">
            Nhập link Google Form:
          </label>
          <input
            type="text"
            id="formLink"
            value={ formLink }
            onChange={ (e) => setFormLink(e.target.value) }
            placeholder="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={ loading }
          >
            { loading ? 'Submitting...' : 'Submit' }
          </button>
        </div>
      </form>

      {/* Display status messages */ }
      <div className="mt-6 space-y-2">
        { statusMessages.map((message, index) => (
          <p key={ index } className="text-sm text-gray-600">
            { message }
          </p>
        )) }
      </div>
    </div>
  );
};

export default EmailForm;
