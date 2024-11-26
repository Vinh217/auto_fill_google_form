import React, { useState, useEffect, useRef } from 'react';

const EmailForm = () => {
  const [ emails, setEmails ] = useState(`truongthuynga13@gmail.com
sn211299@gmail.com
phamloi50569@gmail.com
fuen07052003@gmail.com
vinhdq0001@gmail.com
hduc5806@gmail.com
tamdinh0109@gmail.com
lanhlv@ominext.com
doquang0310@gmail.com
diepntn02@ominext.com
mentallmc808@gmail.com
sujikokolija@gmail.com
mailinh572003@gmail.com
huyenhuyen113084@gmail.com
doanthanhdiep333@gmail.com
honganh6204@gmail.com
nguyet05092004@gmail.com
minhnguyen1992@gmail.com
thuylinh.tran@outlook.com
anhpham2000@yahoo.com
tuan.vo1995@hotmail.com
hoanganh.le1987@gmail.com
bao.nguyen98@outlook.com
phamthanh.tran2001@gmail.com
nguyet.nguyen@ymail.com
nhatthanh.le1988@hotmail.com
khangtran91@gmail.com
hongnhung.pham@yahoo.com
quang.le1993@outlook.com
nguyenthao2002@gmail.com
duyphong.vo@hotmail.com
yenhoang.le1999@gmail.com
trunghieu.nguyen95@yahoo.com
ngocmai.tran2000@gmail.com
minhthao.le98@outlook.com
duclinh.pham@gmail.com
thientam.nguyen1996@yahoo.com
quynhhoa.le@gmail.com
hongngoc.vo1997@outlook.com
vuthanh.tran1995@gmail.com`);
  const [ formLink, setFormLink ] = useState('https://docs.google.com/forms/d/1r6ncMDLIyMceCke696_EnH4Sf3xtFIElad3rUxF8t4o/viewform');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ statusMessages, setStatusMessages ] = useState([]);

  const op1Ref  = useRef(0);
  const count3TimesRef = useRef(0);
  const countMoreThan3TimesRef = useRef(0);
  const op4Ref = useRef(0);
  const op6Ref = useRef(0);
  const op7Ref = useRef(0);
  const op8Ref = useRef(0);
  const op9Ref = useRef(0);
  const op11Ref = useRef(0);

  const optitons1SingleChoice = [ '1年生 ( sinh viên năm 1)', '2年生 ( sinh viên năm 2)', '4年生 ( sinh viên năm 4)', '4年以上 ( sinh viên năm 4+)' ];
  const optitons2SingleChoice = [ '0回 (0 lần)', '1〜2回 (1-2 lần)', '3〜4回 (3-4 lần)', '5回以上 (5 lần trở lên)' ];
  const options3MultiChoice = [ '朝 (Buổi sáng)', '昼 (Buổi trưa)', '夜 (Buổi tối)', '深夜 (Đêm muộn)' ];
  const options4SingleChoice = [ '変化なし (Không thay đổi)', 'はい、体重が増えた (Có, tăng cân)', 'はい、体重が減った (Có, giảm cân)' ];
  const options5MultiChoice = [ '問題なし (Không có vấn đề gì)', 'ニキビができる (Nổi mụn)', '脂性肌 (Da dầu)', '乾燥肌 (Khô da)' ];
  const options6SingleChoice = [ '問題なし (Không gặp vấn đề)', '時々腹が張る (Thỉnh thoảng đầy bụng)', '頻繁に腹が張る、消化不良 (Thường xuyên đầy bụng, khó tiêu)'];
  const options7MultiChoice = [ '変化なし (Không có thay đổi)', 'はい、時々疲れる (Có, thỉnh thoảng mệt mỏi)', 'はい、頻繁に疲れる (Có, thường xuyên mệt mỏi)', 'わからない (Không rõ)' ];
  const options8SingleChoice = [ 'はい、健康が改善された (Có, sức khỏe được cải thiện)', 'はい、しかし違いは感じなかった (Có, nhưng không thấy khác biệt)', '試したことがない (Chưa thử giảm số lần ăn mì)' ];
  const options9MultiChoice = [ '便利 (Tiện lợi)', '安価 (Giá rẻ)', '習慣 (Thói quen)', '美味しい (Vị ngon)' ];
  const options10MultiChoice = [ '追加しない (Không kết hợp thêm)', '野菜 (Rau xanh)', '卵 (Trứng)', '肉/魚 (Thịt/cá)' ];
  const options11SingleChoice = [ 'はい、リスクをよく理解している (Có, tôi hiểu rõ các nguy cơ)', 'はい、しかしあまり気にしない (Có, nhưng không quá quan tâm)', 'いいえ、インスタントラーメンを頻繁に食べることに健康リスクはないと思う (Không, tôi không nghĩ ăn mì gói thường xuyên có nguy cơ sức khỏe)' ];

  console.log('emails :>> ', emails);

  const chooseOption1  = () => {
    if(op1Ref.current < 25) {
      op1Ref.current += 1;
      return '3年生 ( sinh viên năm 3)'
    } else {
      return random(optitons1SingleChoice);
    }
  }

  const chooseOption2 = () => {
    if (count3TimesRef.current < 16) {
      count3TimesRef.current += 1;
      return '3〜4回 (3-4 lần)';
    } else if (countMoreThan3TimesRef.current < 17) {
      countMoreThan3TimesRef.current += 1;
      return '5回以上 (5 lần trở lên)';
    } else {
      return '1〜2回 (1-2 lần)';
    }
  };

  const chooseOption4 = () => {
    if (op4Ref.current < 22) {
      op4Ref.current += 1;
      return 'はい、体重が増えた (Có, tăng cân)';
    } else {
      return random([ '変化なし (Không thay đổi)', 'はい、体重が減った (Có, giảm cân)']);
    }
  };

  const chooseOption6 = () => {
    if (op6Ref.current < 23) {
      op6Ref.current += 1;
      return '頻繁に腹が張る、消化不良 (Thường xuyên đầy bụng, khó tiêu)';
    } else {
      return random( ['問題なし (Không gặp vấn đề)', '時々腹が張る (Thỉnh thoảng đầy bụng)']);
    }
  };

  const chooseOption7 = () => {
    if (op7Ref.current < 21) {
      op7Ref.current += 1;
      return 'はい、時々疲れる (Có, thỉnh thoảng mệt mỏi)';
    } else {
      return  random(['変化なし (Không có thay đổi)','はい、頻繁に疲れる (Có, thường xuyên mệt mỏi)', 'わからない (Không rõ)']);
    }
  };

  const chooseOption8 = () => {
    if (op8Ref.current < 19) {
      op8Ref.current += 1;
      return 'はい、健康が改善された (Có, sức khỏe được cải thiện)';
    } else if (op8Ref.current < 32) { 
      op8Ref.current += 1;
      return 'はい、しかし違いは感じなかった (Có, nhưng không thấy khác biệt)';
    } else {
      return '試したことがない (Chưa thử giảm số lần ăn mì)';
    }
  }

  const chooseOption9 = () => {
    if (op9Ref.current < 4) {
      op9Ref.current += 1;
      return '美味しい (Vị ngon)';
    } else {
      return random(['安価 (Giá rẻ)', '習慣 (Thói quen)', '便利 (Tiện lợi)']);
    }
  }

  const chooseOption11 = () => {
    if (op11Ref.current < 22) {
      op11Ref.current += 1;
      return 'はい、リスクをよく理解している (Có, tôi hiểu rõ các nguy cơ)';
    } else if (op11Ref.current < 34) {
      op11Ref.current += 1;
      return 'はい、しかしあまり気にしない (Có, nhưng không quá quan tâm)';
    } else {
      return 'いいえ、インスタントラーメンを頻繁に食べることに健康リスクはないと思う (Không, tôi không nghĩ ăn mì gói thường xuyên có nguy cơ sức khỏe)';
    }
  }

  const random = (items) => {
    return items[ Math.floor(Math.random() * items.length) ].toString();
  }

  // const randomArrayItems = (arr) => {
  //   const randomLength = Math.floor(Math.random() * arr.length) + 1;
  //   const shuffledArray = arr.sort(() => 0.5 - Math.random());
  //   return shuffledArray.slice(0, randomLength);
  // }

  const randomArray3Items = (arr) => {
    let result = [];
    // Luôn thêm "buổi sáng" và "đêm muộn" với xác suất cao (80%)
    if (Math.random() < 0.8) {
      result.push('朝 (Buổi sáng)');
    }
    if (Math.random() < 0.8) {
      result.push('深夜 (Đêm muộn)');
    }
    
    // Thêm các options khác với xác suất thấp hơn (30%)
    const otherOptions = arr.filter(item => 
      item !== '朝 (Buổi sáng)' && item !== '深夜 (Đêm muộn)'
    );
    
    otherOptions.forEach(option => {
      if (Math.random() < 0.3) {
        result.push(option);
      }
    });
    
    // Đảm bảo luôn có ít nhất 1 option được chọn
    if (result.length === 0) {
      result.push('朝 (Buổi sáng)');
    }
    
    // Xáo trộn mảng kết quả
    return result.sort(() => 0.5 - Math.random());
  }

  const randomArrayItems5 = () => {
    let result = [];
    
    // Ưu tiên "nổi mụn" với xác suất cao (80%)
    if (Math.random() < 0.8) {
      result.push('ニキビができる (Nổi mụn)');
    }
    
    // Thêm các options khác với xác suất thấp hơn (40%)
    const otherOptions = [
      '問題なし (Không có vấn đề gì)',
      '脂性肌 (Da dầu)',
      '乾燥肌 (Khô da)'
    ];
    
    otherOptions.forEach(option => {
      if (Math.random() < 0.4) {
        result.push(option);
      }
    });
    
    // Đảm bảo luôn có ít nhất 1 option được chọn
    if (result.length === 0) {
      result.push('ニキビができる (Nổi mụn)');
    }
    
    return result.sort(() => 0.5 - Math.random());
  };

  const randomArrayItems10 = () => {
    let result = [];
    
    // Ưu tiên "Rau xanh" và "Trứng" với xác suất cao (75%)
    if (Math.random() < 0.75) {
      result.push('野菜 (Rau xanh)');
    }
    if (Math.random() < 0.75) {
      result.push('卵 (Trứng)');
    }
    
    // Thêm các options khác với xác suất thấp hơn (30%)
    const otherOptions = [
      '追加しない (Không kết hợp thêm)',
      '肉/魚 (Thịt/cá)'
    ];
    
    otherOptions.forEach(option => {
      if (Math.random() < 0.3) {
        result.push(option);
      }
    });
    
    // Đảm bảo luôn có ít nhất 1 option được chọn
    if (result.length === 0) {
      result.push('野菜 (Rau xanh)');
    }
    
    return result.sort(() => 0.5 - Math.random());
  };
  
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
        const option1Result = chooseOption1();
        const option2Result = chooseOption2(); 
        const option4Result = chooseOption4(); 
        const option6Result = chooseOption6(); 
        const option7Result = chooseOption7(); 
        const option8Result = chooseOption8(); 
        const option9Result = chooseOption9(); 
        const option11Result = chooseOption11(); 

        const params = {
          'usp': 'pp_url',
          'entry.693744900': option1Result,
          'entry.699610115': option2Result,
          // 'entry.614919955': option3Result,
          'entry.1334952786': option4Result,
          // 'entry.1532856467': option5Result,
          'entry.2146839984': option6Result,
          'entry.2097446406': option7Result,
          'entry.1233657811': option8Result,
          'entry.1210688211': option9Result,
          // 'entry.717035635': random(options10SingleChoice),
          'entry.607275188': option11Result
        };

        const queryString = new URLSearchParams(params);

        //options3 
        const randomsO3 = randomArray3Items(options3MultiChoice);
        for (const item of randomsO3) {
          queryString.append('entry.614919955', item);
        }

        const options5Results = randomArrayItems5();
        for (const item of options5Results) {
          queryString.append('entry.1532856467', item);
        }

        const options10Results = randomArrayItems10();
          for (const item of options10Results) {
            queryString.append('entry.717035635', item);
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
