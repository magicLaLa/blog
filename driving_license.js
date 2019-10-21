let examCarNum = 0; // 驾考车总数

/**
 * 驾考车对象
 */
class ExamCar {
  constructor(carType) {
    examCarNum++;
    this.carId = examCarNum;
    this.carType = carType ? '手动挡' : '自动挡';
    this.usingState = false; // 是否正在使用
  }

  /* 在本车上考试 */
  examine(candidateId) {
    return new Promise((resolve, reject) => {
      this.usingState = true;
      console.log(`考生- ${candidateId} 开始在${this.carType}驾考车- ${this.carId} 上考试`);
      setTimeout(() => {
        this.usingState = false;
        console.log(`%c考生- ${candidateId} 在${this.carType}驾考车- ${this.carId} 上考试完毕`, 'color:#f40');
        resolve();
      }, Math.random * 2000);
    })
  }
}

/**
 * 手动档汽车对象池
 */
ManualExamCarPool = {
  _pool: [], // 驾考车对象池
  _candidateQueue: [], // 考生队列
  /* 注册手动档车 */
  initManualExamCar(manualExamCarNum) {
    for (let i = 1; i < manualExamCarNum; i++) {
      this._pool.push(new ExamCar(true));
    }
  },
  /* 获取状态为未被占用的手动档车 */
  getManualExamCar() {
    return this._pool.find(car => !car.usingState);
  },
  /* 注册考生 id 列表 */
  registCandidates(_candidateList) {
    _candidateList.forEach(item => this.registCandidate(item));
  },
  /* 注册手动档考生 */
  registCandidate(candidateId) {
    const examCar = this.getManualExamCar(); // 获取一个未被占用的手动挡汽车
    if (examCar) {
      examCar.examine(candidateId).then(() => {
        const nextCandidateId = this._candidateQueue.length && this._candidateQueue.shift();
        nextCandidateId && this.registCandidate(nextCandidateId);
      });
    } else {
      this._candidateQueue.push(candidateId);
    }
  },
}

ManualExamCarPool.initManualExamCar(3); // 一共有3个驾考车
ManualExamCarPool.registCandidates([1,2,3,4,5,6,7,8,9,10]) // 10个考生来考试