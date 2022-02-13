export default function Counter({ $target, initialState }) {
    this.$target = $target;
    this.state = initialState;
  
    this.setState = (nextState) => {
      this.validationState(nextState);
      this.state = { ...nextState };
      this.render();
    };
  
    this.validationState = (state) => {
      if (typeof state?.todoCount !== "number") {
        throw new Error("State must have a type of number");
      }
    };
  
    this.render = () => {
      const { todoCount } = this.state;
      const changeTextLength = 3;
      this.$target.innerHTML = `
          ${
            todoCount < changeTextLength
              ? `<span>Just a Bit More :)</span>`
              : `<span>Work Hard Today!</span>`
          }     
          <span>${todoCount}</span>
      `;
    };
  
    this.render();
  }
  