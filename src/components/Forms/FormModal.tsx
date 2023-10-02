import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FormsContext } from "../../Contexts/FormContexts";

export default function FormModal(props) {
  const [name, setName] = React.useState(props.character?.name);
  const formsContext = React.useContext(FormsContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
    };
  };

  return (
    <Transition appear show={formsContext.isOpen(props.id)} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => formsContext.closeModal(props.id)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900"
                >
                  {props.title}
                </Dialog.Title>
                {props.children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
