

export default function about({ params }: { params: { company: string } }) {
    const company = params.company;
    return (
        <div>
          <h1 className="text-3xl font-bold mb-4">About Page of {company}</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et eleifend ex.
            Phasellus facilisis metus eget nibh egestas, vel feugiat dolor congue. Integer
            at tristique neque. Nullam vel ligula vel neque ullamcorper venenatis vel at ligula.
            Morbi eu hendrerit quam. Nulla facilisi.
          </p>
        </div>
      );
    }
